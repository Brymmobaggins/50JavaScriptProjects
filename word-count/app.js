// getting the form element from DOM
const wordCountResult = document.querySelector("p");
const countContainer = document.querySelector(".container");
let inputEl = document.querySelector("input");

function countWord() {
  let characterCount = inputEl.value.length;

  // condition to check if the input is empty
  if (!inputEl.value) {
    showErrorMessage();
  } else {
    showCharacterCount(characterCount);
    saveToLocalStorage(characterCount);
  }
  clearInput();
}

function showErrorMessage() {
  wordCountResult.textContent = "Your input cannot be empty";
  wordCountResult.classList.add("error");
  setTimeout(() => {
    wordCountResult.textContent = " ";
  }, 2000);
}

function showCharacterCount(characterCount) {
  if (characterCount > 1) {
    wordCountResult.innerHTML = `You entered ${characterCount} characters`;
  } else {
    wordCountResult.innerHTML = `You entered ${characterCount} character`;
  }
  wordCountResult.classList.remove("error");
  setTimeout(() => {
    wordCountResult.textContent = "";
  }, 2000);
}

//  function to save local storage of 
function saveToLocalStorage(characterCount) {
    localStorage.setItem("wordCount", characterCount)

}

//  function to clear input
function clearInput() {
  inputEl.value = "";
}
