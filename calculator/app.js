
let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")


buttons.forEach(function (button) {
    // when any button calculator is clicked
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num
        screen.value += value

    })
})

// when the equals (=) sign is clicked
equal.addEventListener('click', function () {
    if (screen.value === " ") {
        screen.value = "Please Enter a Value"

    } else {
        let answer = eval(screen.value)
        screen.value = answer
    }

})

// when the clear (C) is clicked
clear.onclick = () => {
    screen.value = " "
}

