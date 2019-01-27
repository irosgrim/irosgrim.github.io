function checkInputs() {
  let inputErr = false;
  const personalNumber =
    document.forms['registerAccountForm']['personalnumber'].value;
  const postCode = document.forms['registerAccountForm']['postcode'].value;

  // the postCode must be 3 decimals followed by a dash or a space and then 2 more
  // decimal characters
  // or it can be 5 decimal characters
  const regexPostCode = /\d{3}(-|\s)\d{2}|\d{5}$/.test(postCode);

  // the personal number can begin with 19 or 20 and followed by 6 decimal characters,
  // a space or a dash and 4 decimal characters
  // the personal number can start without 19 or 20 and can be composed of 10 decimal characters
  // without special characters
  const regexPersonalNumber = /^(19|20)?(\d{6}(-|\s)\d{4}|(?!19|20)\d{10})$/.test(
    personalNumber
  );

  // if the personal number input is empty or invalid, change the styling to show that
  if (personalNumber === '' || regexPersonalNumber !== true) {
    const personalNumberInput = document.getElementById('personalnumber');
    const personalNumberLabel = document.getElementById('personalNumberLabel');
    personalNumberInput.style.border = '2px solid #F14504';
    personalNumberLabel.style.color = '#F14504';
    personalNumberLabel.style.fontWeight = '600';
    inputErr = true;
  }
  // if the post code input is empty or invalid, change the styling to show that
  if (postCode === '' || regexPostCode !== true) {
    const postCodeInput = document.getElementById('postcode');
    const postCodeInputLabel = document.getElementById('postCodeLabel');
    postCodeInput.style.border = '2px solid #F14504';

    postCodeLabel.style.color = '#F14504';
    postCodeLabel.style.fontWeight = '600';
    inputErr = true;
  }
  // if any of the two inputs are invalid, stay on the page until fixed
  if (inputErr === true) {
    return false;
  } else {
    return true;
  }
}
