
const countEl = document.getElementById('count-el')
const saveEl = document.getElementById('save-el')
let count = 0

console.log(saveEl)

function increment(){
    count += 1
    countEl.textContent = count
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
