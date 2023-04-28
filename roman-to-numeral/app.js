
const convertButton = document.getElementById('convert')

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

    for (let i = 0; i < numInput.length; i++) {
        let current = roman[numInput[i]];
        let next = roman[numInput[i + 1]];

        if (current < next) {
            num -= next - current;
        } else {
            num += current;
        }

    }
    result.innerHTML = num

    // console.log(result)
}

