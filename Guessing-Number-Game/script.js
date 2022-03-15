// get random number from 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1
 
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 1
let resetButton;


function checkGuess() {
    let playerGuess = Number(guessField.value)u
    if (guessCount === 1) {
        guesses.textContent = " Previous guess: "
    }
    guesses.textContent += playerGuess + "  "

    if (playerGuess === randomNum) {
        lastResult.textContent = "Congratulations! You Got it Right🏅"
        lastResult.style.color = "Green"
        lowOrHi.textContent = ""
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "GAME OVER!!!"
        lowOrHi.textContent = ""
        setGameOver()
    } else {
        lastResult.textContent = "Your Guess is Wrong 😩"
        lastResult.style.color = "#b13c3c"
        if (playerGuess < randomNum) {
            lowOrHi.textContent = "Your Guess was too low"
        } else if (playerGuess > randomNum) {
            lowOrHi.textContent = "Your Guess was too high"
        } else if (playerGuess !== randomNum) {
            lastResult.textContent = "Your Guess is not Number 🤔"
            lastResult.style.color = "#004680"
            lowOrHi.textContent = " "
        }
    }
    guessCount++
    guessField.value = ""
    guessField.focus()
}
guessSubmit.addEventListener("click", checkGuess)


function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new Game"
    document.body.appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)

}
function resetGame() {
    guessCount = 1
    const resetParas = document.querySelectorAll(".resultParas p")
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ""
    }
    resetButton.parentNode.removeChild(resetButton)
    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ""
    guessField.focus();

    randomNum = Math.floor(Math.random() * 100) + 1;
}
