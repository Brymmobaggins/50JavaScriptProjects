
// reference the 
const display = document.querySelector('#show-count')

// reference all the buttons
const allBtns = document.querySelector('#allBtns')
let value = 0

// Whenever any of the buttons is click
allBtns.addEventListener('click', counter)

// function that runs whenever the buttons is clicked
function counter(e) {
    const btn = e.target.id
    if (btn === 'increase') {
        value++
        display.textContent = value
    } else if (btn === 'decrease') {
        value--
        display.textContent = value
    } else {
        value = 0
    }
    display.textContent = value
}