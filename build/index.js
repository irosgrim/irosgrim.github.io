const fs = require('node:fs/promises');
const marked = require('marked');
const prettier = require('prettier');

const markdownDir = '../posts';
const outputDir = '../';
const templateDir = '../templates';

const generatePreviewIframe = async (url) => {
    const previewTemplate = await fs.readFile(`${templateDir}/preview.html`, 'utf8');
    return previewTemplate.replace('{{url}}', url)};

const getMarkdownFiles = async () => {
    const files = await fs.readdir(markdownDir);
    return files.filter(file => file.endsWith('.md'));
}

const parseMdContent =  async (data) => {
    const match = /---\n([\s\S]+?)\n---/.exec(data);
    const metadata = {};

    if (match) {
        match[1].split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            metadata[key.trim()] = value.join(':').trim();
        });
    }
    
    const previewRegex = /\[preview\]\(([^)]+)\)/g;
    let content = data.replace(/---\n[\s\S]+?\n---/, '');

    const urls = [];
    let matchPreview;
    while ((matchPreview = previewRegex.exec(content)) !== null) {
        urls.push(matchPreview[1]);
    }
     for (const url of urls) {
        const iframe = await generatePreviewIframe(url);
        content = content.replace(`[preview](${url})`, iframe);
    }
    return {
        content,
        ...metadata
    };
}

const buildSite = async () => {
    const markdownFiles = await getMarkdownFiles();
    console.log('Building posts');
    console.log(markdownFiles);
    
    const mdFiles = [];
    for (const file of markdownFiles) {
        const fileData = await fs.readFile(`${markdownDir}/${file}`, 'utf-8');
        const { title, date, content } = await parseMdContent(fileData);
        
        const htmlContent = marked.parse(content);
        mdFiles.push({title, date, content: htmlContent});
    }
    
    
    const sortedPosts = mdFiles.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    
    let blogListHTML = '';
    for (const post of sortedPosts) {
        console.log(post.date);
        blogListHTML += `
            <article>
                <header>
                    <h2>${post.title}</h2>
                    <time datetime="${post.date}">${post.date}</time>
                </header>
                <div class="content">${post.content}</div>
            </article>
        `;
    }

    const template = await fs.readFile(`${templateDir}/index.html`, 'utf-8');
    const finalHtml = template.replace('<!-- POSTS -->', blogListHTML);
    const formattedHtml = await prettier.format(finalHtml, { parser: "html" });
    await fs.writeFile(`${outputDir}/index.html`, formattedHtml);
}

buildSite().catch(err => {
    
    console.error(err);
    process.exit(1);
});
