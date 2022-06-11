const openButton = document.querySelector('#open-btn')
const closeButton = document.querySelector('.close-btn')
const modal = document.querySelector('.overlay')


// openButton.onclick = function () {
// }
closeButton.onclick = function () {
    modal.classList.add("show")
}
openButton.onclick = function () {
    modal.classList.remove("show")
}