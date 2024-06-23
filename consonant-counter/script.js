
function countConsonant() {
    const inputValue = document.getElementById("input").value.trim();
    let p = document.querySelector("p");
    const consonantLetters = "bdcfghjklmnpqrstvwxyz";
    let count = 0

    for (let char of inputValue) {
        if (consonantLetters.includes(char.toLowerCase())) {
            count++
        }
    }

    if (count > 1) {
        p.textContent = `${inputValue} has ${count} consonants`;
    } else {
        p.textContent = `${inputValue} has ${count} consonant`;
    }
    // disappear after 3 seconds
    setTimeout(() => { p.textContent = ""; input.value = ""; }, 3000);
}

