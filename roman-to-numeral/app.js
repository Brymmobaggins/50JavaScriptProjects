
const convertButton = document.getElementById('convert')
const errorMessage = document.querySelector('span')
const input = document.querySelector('input')

convertButton.addEventListener('click', romanToNumber)


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

    if (numInput == "" || numInput == null) {
        errorMessage.classList.add("error")

        setTimeout(() => {
            errorMessage.classList.remove("error")
            result.innerHTML = ""

        }, 2000);
    }

    else if ( ) {
        errorMessage.textContent = "Enter roman in capital letter"

    } else {
        errorMessage.classList.remove("error")

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


