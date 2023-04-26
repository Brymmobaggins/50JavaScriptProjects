
const convertButton = document.getElementById('convert')

convertButton.addEventListener('click', romanToNumber)

function romanToNumber() {
    let input = document.getElementById('roman-value').value

    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0

    for (let i = 0; i < input.length; i++) {
        let current = roman[input[i]];
        let next = roman[input[i + 1]];

        if (current < next) {
            result += next - current;
            i++
        } else {
            result += current;
        }

    }
    console.log(result)

}
// console.log()

