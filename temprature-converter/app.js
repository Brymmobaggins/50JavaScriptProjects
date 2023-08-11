const inputTemperature = document.getElementById('degree')
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');
const measureSelect = document.getElementById('measure')

// convertBtn.onclick = function () {
//     let choice = document.getElementById('measure').value
//     if (choice == "celcius") {
//         let celcius = (inputTemperature - 32) * 5 / 9
//         resultElement.value = celcius
//     } else  (choice == "fahrenhiet") {
//         let fahrenheit = (inputTemperature * 1.8) + 32
//         resultElement.value = fahrenheit
//     }

// }

// Celsius conversion funtion
function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9)
}

// fahrenheit conversion function
function convetToFahrenheit(celsius) {
    return ((celsius * 1.8)) + 32
}

// click event 
convertButton.onclick = () => {
    // convert input to number
    const inputTemp = Number(inputTemperature.value)

    let result

    if (measureSelect.value === "celsius") {
        result = convertToCelsius(inputTemp)
    } else {
        result = convetToFahrenheit(inputTemp)
    }
    resultElement.value = result

}



