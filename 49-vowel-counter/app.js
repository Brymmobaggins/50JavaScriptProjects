/** @format */

// Select the element to display the result
const showResult = document.querySelector("#show");

// Function to count the vowel letters in a string of letters
function countVowel() {
  // Get the input value and trim any leading/trailing whitespace
  const input = document.querySelector("input").value.trim();
  // Define the vowels
  const vowels = "aeiou";
  let count = 0;

  // Loop through each character in the input string
  for (let char of input) {
    // Check if the character is a vowel (case insensitive)
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  // Display the result based on the count of vowels
  if (input == "") {
    showResult.textContent = `Please enter a word`;
  } else if (count > 1) {
    showResult.textContent = `${input} has ${count} vowels`;
  } else {
    showResult.textContent = `${input} has ${count} vowel`;
  }
  // Clear the UI after three seconds
  clearUp();
}

// Function to clear the UI after three seconds
function clearUp() {
  setTimeout(function () {
    showResult.textContent = "";
    document.querySelector("input").value = ""; // Clear the input field
  }, 3000);
}
