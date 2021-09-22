// get random number from 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 1
let resetButton;



function checkGuess() {
    let playerGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = " Previous guess: "
    }
    guesses.textContent += playerGuess + "  "

    if (playerGuess === randomNum) {
        lastResult.textContent = " Congratulations You Got it Right"
        lastResult.style.backgroundColor = "Green"
        lowOrHi.textContent = ""
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = " GAME OVER!!!"
        lastResult.style.backgroundColor = "#2e6aa7"
        lowOrHi.textContent = ""
        setGameOver()
    } else {
        lastResult.textContent = " Your Guess is Wrong 😩!"
        lastResult.style.backgroundColor = "#b13c3c"
        if (playerGuess < randomNum) {
            lowOrHi.textContent = " Your Guess is less than 1"
        } else if (playerGuess > randomNum) {
            lastResult.textContent = " Your Guess should be between 1 and 100"
        }
    }
    guessCount++
    // guessField.value = ""
    guessField.focus()
}
guessSubmit.addEventListener("click", checkGuess)



function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement("button")
    resetButton.textContent = " Start new Game"
    document.body.appendChild("resetButton")
    resetButton.addEventListener("click", resetGame)

}
function resetGame() {
    guessCount = 1
    let resetParas = document.querySelectorAll(".resetParas p")
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ""
    }
    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ""
    guessField.focus();

    lastResult.style.backgroundColor = "White"
    randomNum = Math.floor(Math.random()) + 1;
}
