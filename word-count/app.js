
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()           // prevent default submi
    countWord()                // invoke the `countWord` function 
})

function countWord() {
    let input = document.getElementById('string').value
    let showLength = document.querySelector('p')
    let count = input.showLength

    if (input === "") {
        input.style.BorderColor = "red"
    } else {
        showLength.textContent = count

    }

}


