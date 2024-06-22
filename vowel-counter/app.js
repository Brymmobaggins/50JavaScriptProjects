

const showResult = document.querySelector("#show")


// function to count the vowel letter in a strings of letters
function countVowel() {
    const input = document.querySelector("input").value.trim()
    const vowels = "aeiou";
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    if (input == "") {
        showResult.textContent = `Please enter a word`;
    } else if (count > 1) {
        showResult.textContent = `${input} has ${count} vowels`;
    } else {
        showResult.textContent = `${input} has ${count} vowel`;
    }
    clearUp()
}

// clear UI after three seconds
function clearUp() {
    setTimeout(function () {
        showResult.textContent = "";
        input.value = "";
    }, 3000);

}

