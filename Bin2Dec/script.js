let binaryInput = document.getElementById('binary-input')
let errorMessage = document.getElementById('error-message')
let decimalInput = document.getElementById("decimal-input")


// convert decimal to binary when user input the binary field
decimalInput.addEventListener('input', function () {

    // convert input to a number
    let decValue = parseInt(decimalInput.value)

    if (decValue < 0 || isNaN(decValue)) {
        errorMessage.textContent = "Please a valid decimal input"
    } else {
        // clear error message and set it back after conversion
        errorMessage.textContent = ""
        binaryInput.value = decValue.toString(2)

    }
})

binaryInput.addEventListener("input", function () {

    let binaryValue = binaryInput.value

    if (validateBinary(binaryValue)) {
        decimalInput.value = parseInt(binaryValue, 2)
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Please enter a valid binary input"
    }



    function validateBinary(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "1" && num[i] != "0") {
                return false
            } 
        }
        return true
    }


})
