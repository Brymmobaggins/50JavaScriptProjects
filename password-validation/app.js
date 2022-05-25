const password = document.getElementById('pass-word')
const letter = document.getElementById('letter')
const messageBox = document.getElementById('message')
const capital = document.getElementById('capital')
const length = document.getElementById('length')
const number = document.getElementById('number')

// whenever user clicks on the password field, show the message box
password.onfocus = function () {
    messageBox.style.display = "block"
}

//  whenever user types outside of the password field, hide the message box
password.onblur = function () {
    messageBox.style.display = "none"

}
// when user starts to type in the password field
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
    // validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid")
        capital.classList.add("valid")
    } else {
        capital.classList.remove("valid")
        capital.classList.add("invalid")
    }
    // validate Number
    let numbers = /[0-9]/g

    if (password.value.match(numbers)) {
        number.classList.remove("invalid")
        number.classList.add("valid")

    } else {
        number.classList.remove("valid")
        number.classList.add("invalid")

    }
    // validate Length
    if (password.value.length >= 8) {
        length.classList.remove("invalid")
        length.classList.add("valid")

    } else {
        length.classList.remove("valid")
        length.classList.add("invalid")

    }

}