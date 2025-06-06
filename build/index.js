const fs = require("node:fs/promises");
const marked = require("marked");
const prettier = require("prettier");

const markdownDir = "../posts";
const outputDir = "../";
const templateDir = "../templates";

const populateTemplate = (template, replacements) => {
    for (let placeholder in replacements) {
        const regex = new RegExp(`{{${placeholder}}}`, 'g');
        template = template.replace(regex, replacements[placeholder])
    }
    return template;
}

const getMarkdownFiles = async () => {
    const files = await fs.readdir(markdownDir);
    return files.filter(file => file.endsWith(".md"));
}

const parseMdContent =  async (data) => {
    const metadataMatch = /---\n([\s\S]+?)\n---/.exec(data);
    const metadata = {};

    if (metadataMatch) {
        metadataMatch[1].split("\n").forEach(line => {
            const [key, ...value] = line.split(":");
            metadata[key.trim()] = value.join(":").trim();
        });
    }
    const previewTemplate = await fs.readFile(`${templateDir}/preview.html`, "utf8");
    const previewRegex = /\[preview\]\(([^)]+)\)/g;
    let content = data.replace(/---\n[\s\S]+?\n---/, "");

    const urls = [];
    let matchPreview;
    while ((matchPreview = previewRegex.exec(content)) !== null) {
        urls.push(matchPreview[1]);
    }
     for (const url of urls) {
        const iframe = populateTemplate(previewTemplate, {url});
        content = content.replace(`[preview](${url})`, iframe);
    }
    return {
        content,
        ...metadata
    };
}

const buildSite = async () => {
    const markdownFiles = await getMarkdownFiles();
    const postTemplate = await fs.readFile(`${templateDir}/post.html`, "utf8");

    console.log("Building posts");
    console.log(markdownFiles);
    
    const mdFiles = [];
    for (const file of markdownFiles) {
        const fileData = await fs.readFile(`${markdownDir}/${file}`, "utf-8");
        const { title, date, content } = await parseMdContent(fileData);
        
        const htmlContent = marked.parse(content);
        mdFiles.push({title, date, content: htmlContent});
    }
    
    const sortedPosts = mdFiles.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    
    let blogListHTML = "";
    console.log("Sorted posts:")

    for (const post of sortedPosts) {
        blogListHTML += populateTemplate(postTemplate, post);
        console.log(post.date);
    }

    const template = await fs.readFile(`${templateDir}/index.html`, "utf-8");
    const finalHtml = template.replace("<!-- POSTS -->", blogListHTML);
    const formattedHtml = await prettier.format(finalHtml, { parser: "html" });
    await fs.writeFile(`${outputDir}/index.html`, formattedHtml);
}

buildSite().catch(err => {
    console.error(err);
    process.exit(1);
});
