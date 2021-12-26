const startButton = document.getElementById('start-btn')
const questionContainerItems = document.getElementById('question-container')

startButton.onclick = startGame


function startGame() {
    console.log("start")
    startButton.classList.add('hide')
    questionContainerItems.classList.remove('hide')

}
function nextQuestion() {

}