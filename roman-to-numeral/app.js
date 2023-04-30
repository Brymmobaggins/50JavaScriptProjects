
const convertButton = document.getElementById('convert')

convertButton.addEventListener('click', romanToNumber)
// const inputError = document.querySelector('input')
const errorMessage = document.querySelector('span')


function romanToNumber() {
    let numInput = document.getElementById('roman-value').value

    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };


    let result = document.getElementById("show-roman")
    let num = 0

    if (numInput == "" || numInput == null ) {
        errorMessage.classList.add("error")

    } else {
        errorMessage.classList.remove("error")
        result.innerHTML = num

    }

    for (let i = 0; i < numInput.length; i++) {
        let current = roman[numInput[i]];
        let next = roman[numInput[i + 1]];

        if (current < next) {
            num -= next - current;
        } else {
            num += current;
        }

    }

    // result.innerHTML = num
    // num = ""

    // console.log(result)
}

