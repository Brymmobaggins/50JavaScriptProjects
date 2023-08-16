let binaryNumberInput = document.getElementById('binary-input')
let errorMessageDisplay = document.getElementById('error-message')
let decimalNumberOutput = document.getElementById("decimal-input")


// convert decimal to binary when user input the binary field
decimalNumberOutput.addEventListener('input', function () {

    // get decimal value entered
    const decimalValue = parseInt(decimalNumberOutput.value)

    // convert to binary and update binary input field
    binaryNumberInput.value = decimalValue.toString(2)

})

binaryNumberInput.addEventListener("input", function () {
    
    // get user input
    const binaryValue = binaryNumberInput.value

    // validate input
    if (isValidBinary(binaryValue)) {

        // convert to decimal and output
        decimalNumberOutput.value = parseInt(binaryValue, 2)
        errorMessageDisplay.textContent = ""
    } else {
        //  show error message
        errorMessageDisplay.textContent = "Please enter a valid binary number"
    }




    // validate binary input 
    function isValidBinary(binaryStr) {

        // loop through each character in input
        for (let char of binaryStr) {
            // check if character is 0 or 1
            if (char !== '0' && char !== '1') {
                return false;
            }
        }
        // input contains only 0s and 1s
        return true;

    }
})
