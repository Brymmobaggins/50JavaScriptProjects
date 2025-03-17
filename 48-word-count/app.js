// getting the form element from DOM
const wordCountResult = document.querySelector("p");
const countContainer = document.querySelector(".container");
let inputEl = document.querySelector("input");


function countWord() {
    let characterCount = inputEl.value.length;

    // condition to check if the input is empty
    if (!inputEl.value) {
        showErrorMessage();
    } else if (!isNaN(inputEl.value)) {
         alert("invalid input")
    } else {
        showCharacterCount(characterCount);
        saveCountToLocalStorage(characterCount);
    }
    clearInput();
}


// function to show error message
function showErrorMessage() {
    wordCountResult.textContent = "Your input cannot be empty";
    wordCountResult.className = "error";

    // vanish in two seconds
    setTimeout(() => {
        wordCountResult.textContent = " ";
    }, 2000);
}

// function to show character count
function showCharacterCount(characterCount) {
    if (characterCount > 1) {
        wordCountResult.innerHTML = `You entered ${characterCount} characters`;
    } else {
        wordCountResult.innerHTML = `You entered ${characterCount} character`;
    }
    wordCountResult.classList.remove("error");
    setTimeout(() => {
        wordCountResult.textContent = "";
    }, 3000);
}

//  function to save local storage of 
function saveCountToLocalStorage(characterCount) {
    localStorage.setItem("wordCount", characterCount)

}

//  function to clear input
function clearInput() {
    inputEl.value = "";
}
