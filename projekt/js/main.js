console.log(`

////////////////////////////////////////
// EatBetter - Grocery Store - V1
// By Ion Rosgrim
// github.com/irosgrim
// January, 2019
//////////////////////////////////////// 

`);

// DOM queries
let meals = [];
const cartIconBtn = document.getElementById('cart-icon');
const userIconBtn = document.getElementById('user-icon');
const userMenuFrame = document.getElementById('user-menu-frame');
const userMenuCloseBtn = document.getElementById('close-btn');
const mealDetailsWindowCloseBtn = document.getElementById('closeWindowBtn');

const dagensRecept = document.getElementById('dagensRecept');

let userContentContainer = document.getElementById('user-content');

let userMenuVisible = false;
let userDetailsVisible = false;
let cartContentVisible = false;
let shoppingCartEmpty = false;
let recipeTextVisible = false;

if (localStorage.getItem('user') !== null) {
  let theUser = JSON.parse(localStorage.getItem('user'));
  document.getElementById('user-name').innerHTML = `
      Hej <span class="dark"> ${theUser.username} </span>
      `;
}

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
  if (e.target && e.target.id === 'logout') {
    logout();
  }
  if (e.target && e.target.id === 'logIn') {
    console.log('logging In');
    let usr = {
      username: document.getElementById('loginUsername').value,
      password: document.getElementById('loginPassword').value
    };
    authenticate(usr);
  }
  if (
    e.target &&
    e.target.id === 'registerAccount' &&
    document.getElementById('registerUsername').value !== '' &&
    document.getElementById('registerName').value !== '' &&
    document.getElementById('registerPersonalNumber').value !== '' &&
    document.getElementById('registerAddress').value !== '' &&
    document.getElementById('registerPostCode').value !== '' &&
    document.getElementById('registerCity').value !== '' &&
    document.getElementById('registerPhone').value !== '' &&
    document.getElementById('registerEmail').value !== ''
  ) {
    let userRegister = {
      username: document.getElementById('registerUsername').value,
      name: document.getElementById('registerName').value,
      personalnumber: document.getElementById('registerPersonalNumber').value,
      adress: document.getElementById('registerAddress').value,
      postcode: document.getElementById('registerPostCode').value,
      city: document.getElementById('registerCity').value,
      phone: document.getElementById('registerPhone').value,
      email: document.getElementById('registerEmail').value,
      loggedIn: false
    };
    registerAccountToDb(userRegister);
  }
  if (e.target && e.target.id === 'openRegisterForm') {
    console.log('register');
    openRegisterForm();
  }

  if (e.target && e.target.dataset.mealid) {
    console.log(e.target.dataset.mealid);
    document.getElementById('modalBg').style.display = 'block';
    requestMeal(e.target.dataset.mealid);
  }

  if (
    (e.target && e.target.id === 'closeWindowBtn') ||
    e.target.id === 'modalBg'
  ) {
    document.getElementById('modalBg').style.display = 'none';
  }
  if (e.target && e.target.id === 'recipeButton') {
    if (recipeTextVisible === false) {
      document.getElementById('recipeText').style.display = 'block';
      recipeTextVisible = true;
    } else {
      document.getElementById('recipeText').style.display = 'none';
      recipeTextVisible = false;
    }
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
  if (localStorage.getItem('user') !== null) {
    let theUser = JSON.parse(localStorage.getItem('user'));
    let loggedInClient_html = `
  <h3 id="logout" class="logout">Log Out</h3>
  <table class="infoTable">
                <tr>
                    <td colspan="3" class="alignCenter"><h3>Kontoinformation</h3></td>
                </tr>
              
                <tr>
                  <td class="alignRight"><label for="userInfoName">Namn</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoName" name="height" required value="${
                    theUser.name
                  }" class="inpt"></td>
                  <td><button class="update" data-id="userName">updatera</button></td>
                </tr>
                <tr>
                  <td class="alignRight"><label for="userInfoAddress">Address</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoAddress" name="height" required value="${
                    theUser.adress
                  }" class="inpt"></td>
                  <td><button class="update" data-id="userAdress">updatera</button></td>
                </tr>

                <tr>
                  <td class="alignRight"><label for="userInfoCity">Address</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoCity" name="userInfoCity" required value="${
                    theUser.city
                  }" class="inpt">
                  </td>
                  <td><button class="update" data-id="userCity">updatera</button></td>
                </tr>

                <tr>
                  <td class="alignRight"><label for="userInfoPostCode">Post nummer</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoPostCode" name="userInfoPostCode" required value="${
                    theUser.postcode
                  }" class="inpt">
                  </td>
                  <td><button class="update" data-id="userPostCode">updatera</button></td>
                </tr>

                <tr>
                  <td class="alignRight"><label for="userInfoPersonalNumber">Personnummer</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoPeronalNumber" name="userInfoPeronalNumber" required value="${
                    theUser.personalnumber
                  }" class="inpt">
                  </td>
                  <td><button class="update" data-id="userPersonalNumber">updatera</button></td>
                </tr>
                <tr>
                  <td class="alignRight"><label for="userInfoPhone">Telefon nummer</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoPhone" name="userInfoPhone" required value="${
                    theUser.phone
                  }" class="inpt">
                  </td>
                  <td><button class="update" data-id="usePhone">updatera</button></td>

                  <tr>
                  <td class="alignRight"><label for="userInfoEmail">E-post adress</label></td>
                  <td class="alignCenter"><input type="text" id="userInfoEmail" name="userInfoEmail" required value="${
                    theUser.email
                  }" class="inpt">
                  </td>
                  <td><button class="update" data-id="userEmail">updatera</button></td>
                </tr>
                </tr>
              </table>
`;
    showUserMenu(loggedInClient_html);
  } else {
    showUserMenu(registerAccount());
  }
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
// check current page
//load 4 recipes on the front page, Recipes of the day
let fullPath = location.pathname;
let currentPage = fullPath.split('/').pop();
if (currentPage === '' || currentPage === 'index.html') {
  requestSugestedMeals();
}

function logout() {
  if (localStorage.getItem('user') !== null) {
    let theUser = JSON.parse(localStorage.getItem('user'));
    // make logout function
    location.reload();
  }
}
