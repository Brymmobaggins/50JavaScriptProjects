let inputTemperature = document.getElementById('degree')
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');
let measureSelect = document.getElementById('measure')

// temperature measurent symbols
const fahrenheitDegreeSymbol = '°F';
const celsiusDegreeSymbol = '°C';



// fahrenheit to celsius conversion funtion
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

// celsius to fahrenheit conversion function
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32.
}



const handleConvert = () => {
    // convert input to number
    let inputValue = Number(inputTemperature.value)

    let choice = measureSelect.value
    let conversionResult

    //  check valide input
    if (inputValue == "") {
        alert("Please enter a value")
        conversionResult = ""
    } else if (Number.isNaN(inputValue)) {
        alert("Please enter a valid number");
        conversionResult = ""
    } else {

        // ternary of simple condition
        conversionResult =
            choice == 'celsius'
                ? celsiusToFahrenheit(inputValue).toFixed(2) + fahrenheitDegreeSymbol
                : fahrenheitToCelsius(inputValue).toFixed(2) + celsiusDegreeSymbol;
    }

    resultElement.value = conversionResult;

};

//  handleCovert funcion to execute when the button in click
convertButton.onclick = handleConvert;




