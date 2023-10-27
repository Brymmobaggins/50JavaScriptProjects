// getting the form element from DOM
const form = document.getElementById('form')
const wordCountResult = document.querySelector('p');



function countWord() {

    const userInput = document.getElementById('string').value;
    const characterCount = userInput.length;

    // condition to check if the input is empty
    if (userInput === "") {
        wordCountResult.textContent = "Your input cannot be empty";
        wordCountResult.classList.add("error");
        setTimeout(function () {
            wordCountResult.textContent = " ";
        }, 2000);
    } else {
        wordCountResult.innerHTML = `<h1>You entered ${characterCount} character</h1>`;
        wordCountResult.classList.remove("error");
        setTimeout(function () {
            wordCountResult.textContent = "";
        }, 2000);
        if (characterCount > 1) {
            wordCountResult.innerHTML = `<h1>You entered ${characterCount} characters</h1>`;
        }
    }
}


