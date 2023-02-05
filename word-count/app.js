// getting the form element from DOM
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()           // prevent default submit
    countWord()                // invoke the `countWord` function 
})


// function to run whenever the form is the submit
function countWord() {
    const showLength = document.querySelector('p')
    let input = document.getElementById('string').value
    let count = input.length

    // condition to check if the input is empty
    if (input === "") {
        showLength.textContent = "Your input cannot be empty"
        showLength.classList.add("error")
        setTimeout(function () {
            showLength.textContent = " "
        }, 2000)
    } else {
        showLength.innerHTML = `<h1>You entered ${count} characters</h1>`
        showLength.classList.remove("error")
        setTimeout(function () {
            showLength.textContent = " "
        }, 3000)

    }

}

