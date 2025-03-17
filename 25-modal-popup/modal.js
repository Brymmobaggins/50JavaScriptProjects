const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const container = document.querySelector('.container')

// when user click on the (x), close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none"
})

// when user click on the button, open the modal
openModal.onclick = function () {
    modal.style.display = "block"

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == container) {
        modal.style.display = "none";
    }
}

