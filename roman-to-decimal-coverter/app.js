
const convertBtn = document.getElementById('convert')
let roman = document.getElementById('roman').value

convertBtn.onclick = function () {


}

if (roman === "" || isNaN(roman)) {
    // alert("no number")
}

function convertToRoman() {
    let num = parseInt(roman)
    let romanNum = ""
    if (num < 1 || num > 3999) {
        return "error"
    }
    if (num < 1000) {
        romanNum = "M"
    } else if (num < 2000) {
        romanNum = "CM"
    } else if (num < 3000) {
        romanNum = "D"
    } else if (num < 4000) {
        romanNum = "CD"
    } else if (num < 5000) {
        romanNum = "C"
    } else if (num < 6000) {
        romanNum = "XC"
    } else if (num < 7000) {
        romanNum = "L"
    } else if (num < 8000) {
        romanNum = "XL"
    } else if (num < 9000) {
        romanNum = "X"
        } else if (num < 10000) {
            romanNum = "IX"
            } else if (num < 11000) {

    }
}
 