// getting the form element from DOM
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()           // prevent default submit
    countWord()                // invoke the `countWord` function 
})


function countWord() {
    const wordCountDisplay = document.querySelector('p');
    const userInput = document.getElementById('string').value;
    const characterCount = userInput.length;
  
    // condition to check if the input is empty
    if (userInput === "") {
      wordCountDisplay.textContent = "Your input cannot be empty";
      wordCountDisplay.classList.add("error");
      setTimeout(function() {
        wordCountDisplay.textContent = " ";
      }, 2000);
    } else {
      wordCountDisplay.innerHTML = `<h1>You entered ${characterCount} characters</h1>`;
      wordCountDisplay.classList.remove("error");
      setTimeout(function() {
        wordCountDisplay.textContent = "";
      }, 2000);
    }
  }
  

