const playButton = document.getElementById('play')
const stopButton = document.getElementById('stop')
const circle = document.getElementsByClassName("circle")
const title = document.getElementById('title')

function onLight() {
    for (let i = 0; i < circle.length; i++) {
        circle[i].removeAttribute("style")
        // circle[i].style.animationPlayState = "running"
        // circle[i].style.WebkitAnimationPlayState = "running"
    }
}

function offLight() {
    title.style.animation = "none"
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.animation = "none"
        circle[i].style.background = "#563260"
    }
}
playButton.addEventListener('click', onLight)
stopButton.addEventListener('click', offLight)