const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const outputSeconds = document.getElementById('second')
const outputTens = document.getElementById('tens')
let seconds = 00
let tens = 00
let interval ;

startButton.onclick = function () {
    clearInterval(interval)
    interval = setInterval(startTime, 60)
}
stopButton.onclick = function () {
    clearInterval(interval)
}
resetButton.onclick = function () {
    clearInterval(interval);
    tens = "00"
    seconds = "00"
    outputTens.textContent = tens
    outputSeconds.textContent = seconds
}

function startTime() {
    tens++
    if (tens <= 9) {
        outputTens.textContent = "0" + tens
    }
    if (tens > 9) {
        outputTens.textContent = tens
    }
    if (tens > 59) {
        seconds++
        outputSeconds.textContent = "0" + seconds
        tens = 0
        outputTens.textContent = "0" + tens
    }
    if (seconds > 9) {
        outputSeconds.textContent = seconds
    }
}