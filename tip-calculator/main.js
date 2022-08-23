const amount = document.getElementById('amount')
const guest = document.getElementById('guest')
const quality = document.getElementById('quality'
)
const tipAmount = document.getElementById('tip-amount')
const calculateButton = document.getElementById('calculate')

function calculate() {
    const tip = (amount.value * quality.value) / ((guest.value)).tofixed(2)
    amount.value = ""
    guest.value = ""
    quality.value = ""
    if (tip === 
        'NAN') {
        tipAmount.textContent = "Tip $0 each"
        displayTipAmount()
    } else {
        tipAmount.textContent = "Tip $" + tip + ' each'
        displayTipAmount()
    }
}
function displayTipAmount() {
    let x = tipAmount
    x.tipAmount = 'show'
    setTimeout(function () {
        x.className = x.className
        replace("show", "")
    }, 3000)
}

