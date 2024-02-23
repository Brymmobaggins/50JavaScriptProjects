
const convertButton = document.querySelector('button')
const span = document.querySelector('span')
const input = document.querySelector('input')

//when the button is clicked
convertButton.onclick = function () {

    // get the value for dollar and assign it to a variable 
    let dollar = document.getElementById('dollar-value')
    
// holds the value for naira
    let nairaAmount = document.getElementById('naira-value')

    // convert all naira input value  to number
    nairaAmount = Number(nairaAmount.value)

    if (isNaN(nairaAmount) || nairaAmount <= 0 || nairaAmount == null) {
        input.classList.add("error") 
        span.style.visibility = "visible"
        setTimeout(function(){
            input.classList.remove("error")
            input.value = ""
            span.style.visibility= "hidden"
        }, 2000)
    }
    else {
        let calculatedAmount = nairaAmount / 750
        dollar.value = "$" + calculatedAmount
    }

}