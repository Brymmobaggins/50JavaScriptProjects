const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

let score = 5;
let resetButton;
let nextQuestion
function check() {
    let q1 = document.quiz.question1.value
    if (q1 === "JavaScript") {
        score *= 5
        document.write(score)
    } else {
        document.write("Never give up")
    }

}