const vowelCountShow = document.getElementById('show')
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()                           // prevent default submit
    if (userInput.value === "") {
        vowelCountShow.textContent = "Please enter some words"
    } else if (isNaN(userInput.value)) {
        checkVowel()
    } else {
        vowelCountShow.textContent = "Numbers are not allowed"

    }

})
// clear input
input.onfocus = function () {                     // when input is focus 
    vowelCountShow.textContent = ""               // clear text
    input.value = ""                              // clear input value
}
// check vowel
let vowelCount = 0;                                // create variable that holds the count 
function checkVowel() {
    const userInput = document.getElementById('input').value // get the value with an input
    const vowels = ["a", "e", "i", "o", "u"]       // an array of vowel letters
    for (let i = 0; i < userInput.length; i++) {      // loop through the input value
        for (let j = 0; j < vowels.length; j++) {   // loop through the array of vowel letters
            if (input[i] === vowels[j]) { // if statement to check if each iteration of input is the same as each iteration of vowel
                vowelCount++                 // if yes, count increases by 1
            }
        }
    }
    if (vowelCount > 1) {
        vowelCountShow.innerHTML = `${userInput} have ${vowelCount} vowel letters`;
    } else {
        vowelCountShow.innerHTML = `${userInput} has ${vowelCount} vowel letter`;

    }
}
