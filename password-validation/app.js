const password = document.getElementById('pass-word')
const letter = document.getElementById('letter')
const messageBox = document.getElementById('message')

// whenevers user clicks on the password field, show the message box
password.onfocus = function () {
    messageBox.style.display = "block"
}

//  whenever user types outside of the password field, hide the message box
password.onblur = function () {
    messageBox.style.display = "none"

}

password.onkeyup = function () {
    // Validate lowercase
    let lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid")
        letter.classList.add("valid")

    } else {
        letter.classList.remove('valid')
        letter.classList.add("invalid")
    }
}