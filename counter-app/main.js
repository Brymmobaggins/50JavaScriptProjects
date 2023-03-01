
// reference the the element that show the count
const display = document.querySelector('#show-count')

// reference all the buttons
const allBtns = document.querySelector('#allBtns')

// Whenever any of the buttons is click
allBtns.addEventListener('click', counter)

let value = 0

// function that for count color
function showColor() {
    if (value <= 0) {
        display.style.color = 'Red'
    } else {
        display.style.color = 'white'
    }

}


// function that runs whenever the buttons is clicked
function counter(e) {
    // variable that target the id of every button
    const btn = e.target.id

    // if id is `increase` count increases
    if (btn === 'increase') {
        value++
        display.textContent = value
        showRed()

        // if the id value is "decrease" count decreases
    } else if (btn === 'decrease') {
        value--
        display.textContent = value
        showRed()

        // if it is otherwise count goes back to zero
    } else {
        value = 0
        display.textContent = value
    }
}


