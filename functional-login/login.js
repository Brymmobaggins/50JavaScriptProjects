const form = document.querySelector('form')
// const username = document.getElementById('username')
// const password = document.getElementById('password')

form.addEventListener("submit", (e) => {
    e.preventDefault()


    const username = form.username.value
    const password = form.password.value

    const authenticated = checKUserAndPassword(username, password)

    if (authenticated) {
        // redirect to home page
        window.location.href = "./logout.html"
        // alert("corect")
    } else {
        // display error message
        alert("Invalid username or password")
    }

})

// function for checking username and password

function checKUserAndPassword(username, password) {

    if (username === "admin" && password === "1234") {
        return true
    } else {
        return false
    }
}