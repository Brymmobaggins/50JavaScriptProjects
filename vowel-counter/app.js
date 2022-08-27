const vowelCountShow = document.getElementById('show')
const submitButton = document.getElementById('submit')
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // checkVowel()
})


function checkVowel() {
    let count = 0;    // create variable that holds the count
    const input = document.getElementById('input').value // get the value with an input
    const vowel = ["a", "e", "i", "o", "u"] // an array of vowel letters

    for (let i = 0; i < input.length; i++) { // loop through the input value
        for (let j = 0; j < vowel.length; j++) { // loop through the array of vowel letters
            if (input[i] === vowel[j]) { // if statement to check if each iteration of input is the same as each iteration of vowel
                count++ // if yes, increase count by 1
            }
        }
    }
    vowelCountShow.textContent = "Your vowel input is " + count // assign count to display the text
}
// console.log(checkVowel("griow"))
