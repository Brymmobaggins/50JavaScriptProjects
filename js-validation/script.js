const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent submit
  checkValid();
});

function checkValid() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let passRGEX = /^[A-Z]*$/; // five capital letters
  let userRGEX = /^[A-Za-z]+$/; // 
  let emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (username === "") {
    showError(username, "username cannot be empty");
  } else if (username.match(userRGEX)) {
    alert("Congratulation you passed!");
  } else {
    showError(username, "username must have 5 uppercase letters");
  }
  if (password === "") {
    showError(password, "Password cannot be empty");
  } else if (password.match(passRGEX)) {
    alert("Congratulation You Passed");
  } else {
    showError(password, "Password should be letter only");
  }
  if (email === "") {
    showError(email, "Email cannot be empty");
  } else if (email.test(emailRGEX)) {
    alert("Successful Email");
  } else {
    showError(email, "This is not a valid email");
  }
}
function showError(input, message) {
  let formControl = input.parentElement; // form-control
  let error = formControl.querySelector('small');

  error.textContent = message; // add error to message
  formControl.className = 'form-control error'; // add error class
}
