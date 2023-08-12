const inputTemperature = document.getElementById('degree')
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');
const measureSelect = document.getElementById('measure')



// Celsius conversion funtion
function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9)
}

// fahrenheit conversion function
function convetToFahrenheit(celsius) {
    return ((celsius * 1.8)) + 32
}

// click event 
const handleConvert = () => {
    // convert input to number
    const inputValue = Number(inputTemperature.value)
    let conversionResult
    //  validate input
    if (inputValue == "") {
        alert("Please enter a temperature")
        conversionResult = ""
    } else if (Number.isNaN(inputValue)) {
        alert("Please enter a valid number");
        conversionResult = ""
    } else {


        // use ternary for simple condition
        conversionResult = measureSelect.value === 'celsius' ? convertToCelsius(inputValue) : convetToFahrenheit(inputValue)
    }
    resultElement.value = conversionResult

}
convertButton.onclick = handleConvert



