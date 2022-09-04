
const form = document.querySelector('form')



form.addEventListener("submit", function (e) {
    e.preventDefault()

    const input = document.querySelector('input')
    let result = document.getElementById('result')
    let poundsTokg

    if ((input.value <= 0) || (isNaN(input.value))) {
        result.innerHTML = "<span>Please some enter numbers!</span>"
        result.classList.add('error')
        input.classList.add('error')
        setTimeout(() => {
            result.innerHTML = ""
            result.classList.remove("error")
            input.classList.remove('error')

        }, 2000);
        input.value = ""
    } else {

    }






})