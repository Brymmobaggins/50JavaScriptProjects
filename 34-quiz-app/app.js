const startButton = document.getElementById('start-btn')
const questionContainerItems = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

const nexButton = document.getElementById('next-btn')
let shuffledQuestions = [];
let currentQuestionIndex;

startButton.onclick = startGame

nexButton.addEventListener('click', function () {
    currentQuestionIndex++
    setNextQuestion()
})

// Questions
const questions = [
    {

        question: "What is 2 + 2?",
        answers: [
            {
                text: "4",
                correct: true
            },
            {
                text: "5",
                correct: false
            }, {
                text: "6",
                correct: false

            },
            {
                text: "7",
                correct: false
            }
        ],
        question: "What is 10 * 2?",
        answers: [
            {
                text: "6",
                correct: true
            },
            {
                text: "51",
                correct: false
            }, {
                text: "65",
                correct: false

            },
            {
                text: "71",
                correct: false
            }
        ],
        question: "What is the full name of the JavaScript function that is used to convert a string to an array?",
        answers: [
            {
                text: "6",
                correct: true
            },
            {
                text: "51",
                correct: false
            }, {
                text: "65",
                correct: false

            },
            {
                text: "71",
                correct: false
            }
        ],
        question: "What is 10 * 2?",
        answers: [
            {
                text: "6",
                correct: true
            },
            {
                text: "51",
                correct: false
            }, {
                text: "65",
                correct: false

            },
            {
                text: "71",
                correct: false
            }
        ]
    },

]
function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    questionContainerItems.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()

}
function setNextQuestion() {

    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    });
}
function resetState() {
    nexButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }


}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nexButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
