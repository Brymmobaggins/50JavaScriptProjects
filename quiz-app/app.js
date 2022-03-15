const startButton = document.getElementById('start-btn')
const questionContainerItems = document.getElementById('question-container')

startButton.onclick = startGame

// Questions
const questionBank = [
    {
        question: "",
        Option: ['','','',''],
        answer: ""
    },
    {
        question: "",
        Option: ['','','',''],
        answer: ""
    },
    {
        question: "",
        Option: ['','','',''],
        answer: ""
    },
    {
        question: "",
        Option: ['','','',''],
        answer: ""
    },
    {
        question: "",
        Option: ['','','',''],
        answer: ""
    }
]
function startGame() {
    startButton.classList.add('hide')
    questionContainerItems.classList.remove('hide')
    nextQuestion()

}
function nextQuestion() {

} 