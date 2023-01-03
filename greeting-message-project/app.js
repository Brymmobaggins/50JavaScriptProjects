// get the date
const date = new Date()

// get hour from date
const hour = date.getHours()

// get button from the DOM
const button = document.querySelector('button')

// select message  area from the DOM
const messageArea = document.querySelector("#message")

// add click event to the button
button.onclick = function () {
    if (hour > 17) {
        messageArea.innerHTML = `<h1>Hello! Good Evening</h1>`
        document.body.style.backgroundColor = "black"
        messageArea.classList.add("dark-evening")
    } else if (hour > 12) {
        messageArea.innerHTML = `<h1>Hello! Good Afternoon</h1>`

    } else {
        messageArea.innerHTML = `<h1>Hello! Good Morning.</h1>`
        messageArea.classList.remove("dark-evening")
        messageArea.classList.add("light-morning")
        document.body.style.backgroundColor = "white"
    }
}