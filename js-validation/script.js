const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent submit
  checkValid();
});

function checkValid() {
  let username = document.getElementById("user-name");
  let password = document.getElementById("pass-word");
  let email = document.getElementById("e-mail");
  let userRGEX = /^[A-Za-z]+$/; // Regex for letters with no spaces

  // Regex password uppercase lowercase number special characters
  let passRGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/; 

  if (username.value === "") {
    showError(username, "username cannot be empty");
  } else if (username.value.match(userRGEX)) {
    alert("Congratulation you passed!");
  } else {
    showError(username, "username must have not spaces");
  }
  if (password.value === "") {
    showError(password, "Password cannot be empty");
  } else if (password.value.match(passRGEX)) {
    alert("Congratulation You Passed");
  } else {
    showError(password, "Password should have special chars");
  }
  if (email.value === "") {
    showError(email, "Email cannot be empty");
  } else if (!isValid(email.value)) {
    showError(email, "This is not a valid email");
  } else {
    alert("Successful Email");
  }
}

function showError(input, message) {
  let formControl = input.parentElement; // form-control
  let error = formControl.querySelector('small');

  error.textContent = message; // add error to message
  formControl.className = 'form-control error';
}

function isValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

