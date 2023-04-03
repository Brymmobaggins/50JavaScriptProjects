let dollarAmount = document.querySelector('#Dollar')
let nairaAmount = document.querySelector('#naira')
let convertBtn = document.querySelector('#convert')

function convertToDollar() {
    // convert dollar input value to number
    dollarAmount = Number(dollarAmount.value)

    // Check if dollar amount is number, less than Zero or empty
    if (isNaN(dollarAmount) || dollarAmount <= 0 || dollarAmount === null) {
        alert("Please enter a Dollar amount")
    }
    // otherwise do the calculation
    else {
        let calculatedAmount = dollarAmount * 750
        nairaAmount.value = "N" + calculatedAmount
    }

}