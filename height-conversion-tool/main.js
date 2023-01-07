
//  get form from DOM
const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault() // prevent default form submission 
    convertToCm()   // function call

})


// function to convert to cm
function convertToCm() {

    // get user input
    let feet = document.querySelector("#feet")
    let inches = document.querySelector("#inches")
    const results = document.querySelector("#results")

    // convert user input to number
    inches = parseInt(inches.value)
    feet = parseInt(feet.value)

    if (isNaN(feet) || isNaN(inches)) {
        results.textContent = " Please enter a valid number"
    } else if (feet < 0) {
        results.textContent = " Please enter a feet greater than 0"

    } else if (inches < 0 || inches >= 12) {
        results.textContent = " Please an inche value between 0 and 12"
    } else {
        //  make convertion on centimeter (cm)
        // cm = inches * 2.54
        let totalInches = (feet * 12) + inches
        results.textContent = `${totalInches} cm`

        // clear user inpput after get the results
        document.querySelector("#feet").value = " "
        document.querySelector("#inches").value = ""
    }

}
