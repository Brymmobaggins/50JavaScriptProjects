
const form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const input = document.querySelector('input')
    let result = document.getElementById('result')
    let poundsTokg

    if ((input.value <= 0) || (isNaN(input.value))) {
        result.innerHTML = "<span>Kindly, enter some numbers! 😏 </span>"
        result.classList.add('error')
        input.classList.add('error')
        setTimeout(function() {
            result.innerHTML = ""
            result.classList.remove("error")
            input.classList.remove('error')

        }, 2000);
        input.value = ""
    } else {
        poundsTokg = Number(input.value) / 2.2
        result.innerHTML = `<b>${poundsTokg.toFixed(2)}</b>`
        result.classList.add("sucess")
        input.classList.add("sucess")
        setTimeout( function(){
            result.innerHTML = ""
            result.classList.remove("sucess")
            input.classList.remove("sucess")
            input.value = ""

        }, 4000);

    }


})