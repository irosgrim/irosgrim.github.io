function authenticate(usr) {
  if (localStorage.getItem('user') !== null) {
    let theUser = JSON.parse(localStorage.getItem('user'));
    if (usr.username === theUser.username) {
      theUser.loggedIn = true;
      localStorage.setItem('user', JSON.stringify(theUser));
      location.reload();
    }
  } else {
    document.getElementById('loginError').innerText =
      'Login failed, try again.';
  }
}

function registerAccountToDb(userRegister) {
  localStorage.setItem('user', JSON.stringify(userRegister));

  if (localStorage.getItem('user') !== null) {
    alert('registered user succesfully');
  }
}
