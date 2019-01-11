const header = document.getElementById("header_menu");
const mobile_header = document.getElementById("mobile_header_menu");
const main = document.getElementById("main_container");
const projekt_btn = document.getElementById("projekt");
const kompetens_btn = document.getElementById("kompetens");
const kontakt_btn = document.getElementById("kontakt");
const tooltip = document.getElementById("bubble");
const tooltip_text = document.getElementById("tooltip_text");
const slider = document.getElementById("slider");

const menu_arr = [projekt_btn, kompetens_btn, kontakt_btn];

menu_arr.forEach(btn => {
  const btn_props = btn.getBoundingClientRect();
  btn.onclick = () => {};
  btn.onmouseout = () => {
    tooltip.style.opacity = "0";
  };
  btn.onmouseover = e => {
    tooltip.style.opacity = "1";
    tooltip_text.innerText = btn.dataset.title;
  };
});

window.onscroll = function() {
  let small_screen = window.matchMedia("(max-width: 610px)");
  small_screen.matches ? mobile_stick_it() : stickIt();
};

let sticky = header.offsetTop;
let sticky_mobile = mobile_header.offsetTop;

function stickIt() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    main.style.marginTop = "155px";
  } else {
    header.classList.remove("sticky");
    main.style.marginTop = "0";
  }
}
function mobile_stick_it() {
  if (window.pageYOffset > sticky_mobile) {
    mobile_header.classList.add("sticky");
    main.style.marginTop = "30px";
  } else {
    mobile_header.classList.remove("sticky");
    main.style.marginTop = "0";
  }
}
