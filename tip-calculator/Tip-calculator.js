let billAmount = document.getElementById('bill-amount')
let percentageTip = document.getElementById('percentage-tip')
let tipAmount = document.getElementById('tip-amount')
let total = document.getElementById('total')
let calculate = document.getElementById('calculate-btn')


calculate.onclick = function () {
    // covert bill value to number/integer 
    billAmount = Number(billAmount.value) 

    // covert percentage tip value to number/integer 
    percentageTip = Number(percentageTip.value)


    // check if
    if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
        alert("Please enter a Bill Amount")
    }
     else if (isNaN(percentageTip) || percentageTip <= 0 || percentageTip === null) {
        alert("Please enter a valid Tip Percentage")

    }
    else {
        let calculatedTip = percentageTip / 100 * billAmount
        tipAmount.value = "$" + calculatedTip

        let calculatedTotal = billAmount + calculatedTip
        total.value = "$" + calculatedTotal

    }

}