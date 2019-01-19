
const menu = document.getElementById('menu_container');
const menu_btn = document.getElementById('menu_btn');
const go_back_btn = document.getElementById('go_back');

let menu_visible = false;

menu_btn.onclick = () => {
    //show menu
    if (menu_visible === false) {
        menu.style.width = '130px';
        menu_visible = true;
    } else {
        //hide menu
        menu.style.width = '0';
        menu_visible = false;
    }
}

//scroll to top
go_back_btn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) ?
        go_back_btn.style.display = "block" :
        go_back_btn.style.display = "none";
};

