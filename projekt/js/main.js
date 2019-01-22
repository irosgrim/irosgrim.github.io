// DOM queries
const cartIconBtn = document.getElementById('cart-icon');
const userIconBtn = document.getElementById('user-icon');
const userMenuFrame = document.getElementById('user-menu-frame');
const userMenuCloseBtn = document.getElementById('close-btn');

let userContentContainer = document.getElementById('user-content');

let userMenuVisible = false;
let userDetailsVisible = false;
let cartContentVisible = false;

// write the content in the sliding sidebar
function showUserMenu(content) {
  userContentContainer.innerHTML = content;
}

// shopping cart section
cartIconBtn.addEventListener('click', () => {
  let content = `
  <h2>Kundvagnsinnehåll</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga
    soluta eveniet quae expedita repudiandae tenetur facere eius! Ducimus
    nisi porro dolor voluptatum quis nesciunt commodi eveniet repellat
    perspiciatis modi.
  </p>
  `;
  if (userMenuVisible === true && userDetailsVisible === true) {
    cartContentVisible = true;
    userDetailsVisible = false;
    showUserMenu(content);
  } else {
    showUserMenu(content);
    userMenuFrame.style.width = '80%';
    userMenuVisible = true;
    userDetailsVisible = false;
    cartContentVisible = true;
  }
});

// account settings
userIconBtn.addEventListener('click', () => {
  let content = `
    <h2>Kontoinställningar</h2>
    <p>
    Ducimus fuga
    soluta eveniet quae expedita repudiandae tenetur facere eius! Ducimus
    nisi porro dolor voluptatum quis nesciunt commodi eveniet repellat
    perspiciatis modi.
    </p>
    `;
  if (userMenuVisible === true && cartContentVisible === true) {
    cartContentVisible = false;
    userDetailsVisible = true;
    showUserMenu(content);
  } else {
    showUserMenu(content);
    userMenuFrame.style.width = '80%';
    userMenuVisible = true;
    userDetailsVisible = true;
  }
});

// close sliding sidebar
userMenuCloseBtn.addEventListener('click', () => {
  userMenuFrame.style.width = '0';
  userMenuVisible = false;
});
