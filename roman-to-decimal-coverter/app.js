
const convertButton = document.getElementById('convert')
// const numberResult = document.getElementById('result')

convertButton.addEventListener('click', romanToNumber)


function romanToNumber() {
    let num = document.getElementById('roman-value').value
    // input.toUpperCase()
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

    for (let i = 0; i < num.length; i++) {
        let current = roman[num[i]];
        let next = roman[num[i + 1]];

        if (current < next) {
            result += next - current;
            i++
            document.getElementById("display-roman").innerHTML = num

        } else {
            result += current;
        }

    }
    return result

    // console.log(result)
}

