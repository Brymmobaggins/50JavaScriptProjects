
const convertButton = document.getElementById('convert')
const input = document.querySelector('input')

convertButton.addEventListener('click', romanToNumber)


function romanToNumber() {
    const errorMessage = document.querySelector('span')
    let numInput = document.getElementById('roman-value').value
    let showMessage = document.querySelector('small')

    let roman = {
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

    if (numInput == "" || numInput == null) {
        errorMessage.classList.add("error")

        setTimeout(() => {
            errorMessage.classList.remove("error")
            result.innerHTML = ""

        }, 2000);

    }
    if (numInput !== roman) {

        // showMessage.classList.add("show")

        setInterval(() => {
            errorMessage.classList.remove("error")
            result.value = ""

        }, 2000);

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
    result.innerHTML = `<p>Number value is: ${num}</p>`
}


