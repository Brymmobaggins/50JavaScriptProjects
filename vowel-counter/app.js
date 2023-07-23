const vowelCountShow = document.getElementById('show')
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()                           // prevent default submit
    if (input.value === "") {
        vowelCountShow.textContent = "Please enter some words"
    } else if (isNaN(input.value)) {
        checkVowel()
    } else {
        vowelCountShow.textContent = "Numbers are not allowed"

    }
})

input.onfocus = function () {                     // when input is focus 
    vowelCountShow.textContent = ""               // clear text
    input.value = ""                              // clear input value
}

function checkVowel() {
    let count = 0;                                // create variable that holds the count 
    const input = document.getElementById('input').value // get the value with an input
    const vowel = ["a", "e", "i", "o", "u"]       // an array of vowel letters
    for (let i = 0; i < input.length; i++) {      // loop through the input value
        for (let j = 0; j < vowel.length; j++) {   // loop through the array of vowel letters
            if (input[i] === vowel[j]) { // if statement to check if each iteration of input is the same as each iteration of vowel
                count++                 // if yes, count increases by 1
            }
        }
    }
    if (count > 1) {
        vowelCountShow.innerHTML = `${input} have ${count} vowels`;
    }else{
        vowelCountShow.innerHTML = `${input} has ${count} vowel`;

    }
}
