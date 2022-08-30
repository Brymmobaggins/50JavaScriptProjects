
const countEl = document.getElementById('count-el')
const saveEl = document.getElementById('save-el')
let count = 0


// function to run whenever the incremnent button is clicked
function increment(){
    count += 1
    countEl.textContent = count
}

// function to run whenever the save button is clicked
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
