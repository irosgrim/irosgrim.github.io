console.log(`

////////////////////////////////////////
// EatBetter - Grocery Store - V1
// By Ion Rosgrim
// github.com/irosgrim
// January, 2019
//////////////////////////////////////// 

`);

// DOM queries
const cartIconBtn = document.getElementById('cart-icon');
const userIconBtn = document.getElementById('user-icon');
const userMenuFrame = document.getElementById('user-menu-frame');
const userMenuCloseBtn = document.getElementById('close-btn');

let userContentContainer = document.getElementById('user-content');

let userMenuVisible = false;
let userDetailsVisible = false;
let cartContentVisible = false;
let loggedIn = false;
let shoppingCartEmpty = false;

// shopping cart section
cartIconBtn.addEventListener('click', () => {
  if (userMenuVisible === true && userDetailsVisible === true) {
    cartContentVisible = true;
    userDetailsVisible = false;
    shoppingCart();
  } else {
    shoppingCart();
    userMenuFrame.style.width = '100%';
    userMenuVisible = true;
    userDetailsVisible = false;
    cartContentVisible = true;
  }
});

// account settings
userIconBtn.addEventListener('click', () => {
  if (userMenuVisible === true && cartContentVisible === true) {
    cartContentVisible = false;
    userDetailsVisible = true;
    userDetails();
  } else {
    userDetails();
    userMenuFrame.style.width = '100%';
    userMenuVisible = true;
    userDetailsVisible = true;
  }
});

// because the button doesn't exist yet, i need to attach the event listener to the document
// the button will be recognized by id
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'openLoginForm') {
    console.log('login pressed');
    openLoginForm();
  }
  if (e.target && e.target.id === 'openRegisterForm') {
    console.log('register');
    openRegisterForm();
  }
});

// close sliding sidebar
userMenuCloseBtn.addEventListener('click', () => {
  userMenuFrame.style.width = '0';
  userMenuVisible = false;
});

// when login button is pressed, the form will be shown
function openLoginForm() {
  const loginBtn = document.getElementById('openLoginForm');
  setTimeout(function() {
    loginBtn.style.opacity = '0';
    containerLogin.style.height = 'auto';
  }, 100);
}

// when register account button is pressed, the form will be shown
function openRegisterForm() {
  const registerBtn = document.getElementById('openRegisterForm');
  setTimeout(function() {
    registerBtn.style.display = 'none';
    containerRegister.style.height = 'auto';
  }, 100);
}

// generate the forms for register account
// the content is taken from html.js
function registerAccount() {
  let forms = registerOrLoginForms_html;
  return forms;
}

// called when the user icon is pressed
function userDetails() {
  let userInfo = loggedInClient_html;
  loggedIn === true ? showUserMenu(userInfo) : showUserMenu(registerAccount());
}

// called when the shopping cart button is pressed
function shoppingCart() {
  let empty = emptyShoppingCart_html;

  let notEmpty = notEmptyShoppingCart_html;

  shoppingCartEmpty === true ? showUserMenu(empty) : showUserMenu(notEmpty);
}

// write the content in the sliding sidebar
function showUserMenu(content) {
  userContentContainer.innerHTML = content;
}
