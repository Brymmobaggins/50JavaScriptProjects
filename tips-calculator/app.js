const billAmount = document.getElementById('amount')
const fiveButton = document.getElementById('five')
const tenButton = document.getElementById('ten')
const fifteenButton = document.getElementById('fifteen')
const message = document.getElementById('message')
// const tip = ""   

const calculate = function () {
    const tip = (billAmount.value * fifteenButton.value).toFixed(6)
    // billAmount.value = ""
    // fifteenButton.value = ""
    // // message.textContent = "Tip $0 " + tip + " each"
    if (tip === 'NaN') {
        message.textContent = "Tip $0 each"
    }
    else {
        message.textContent = tip
    }
}
// console.log(calculate())






// }
// fiveButton.onclick = function () {
//     const tip = (billAmount.value * fiveButton.value)
//     if (tip === NaN) {
//         message.textContent = "Tip $0 each"
//     } else {
//         message.textContent = "Tip $0 " + tip + " each"
//     }

// }
// tenButton.onclick = function () {
//     tip = (billAmount.value * tenButton.value)
// }

