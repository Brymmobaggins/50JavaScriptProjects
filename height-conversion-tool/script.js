
// get the form from the DOM
const form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault() // prevent default submission


    // get user input from the form
    let feet = document.querySelector("#feet")
    let inches = document.querySelector("#inches")
    const results = document.querySelector("#results")

    //  convert user input to integer
    feet = parseInt(feet.value)
    inches = parseInt(inches.value)

    //  condition to check if user input is a number
    if (isNaN(feet) || isNaN(inches)) {
        results.textContent = "Please enter a Valid number!"

    } else if (feet < 0) {
        results.textContent = "Please enter a feet greater than 0"
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please enter an inch value between 0 and 12"
    } else {
        //  make conversion to centimeter
        // cm = inches * 2.54
        let totalInches = (feet * 12) + inches;
        results.textContent = `${totalInches} cm`

        // clear user input after getting the results
        document.querySelector("#feet").value = " "
        document.querySelector("#inches").value = " "

    }
})