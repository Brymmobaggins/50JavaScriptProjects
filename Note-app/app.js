
const openModalBtn = document.querySelector('#open-modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const addNoteBtn = document.querySelector('#add-note')
const cardContainer = document.querySelector('.cards-container')



openModalBtn.addEventListener('click', function () {
    modal.style.display = "block"
    overlay.style.display = "block"

})
closeModalBtn.addEventListener('click', function () {
    modal.style.display = "none"
    overlay.style.display = "none"
})

addNoteBtn.addEventListener("click", function () {
    createNote()
    document.getElementById('note-text').value = ""
    modal.style.display = "none"
    overlay.style.display = "none"
})


function createNote() {
    const noteText = document.getElementById('note-text').value

    if (!noteText) {
        alert("Enter Some notes")
    } else {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.textContent = noteText

        // changes card background color randomly
        cardDiv.style.backgroundColor = randomColor()

        //  Creating a span element for date
        const dateSpan = document.createElement('span')
        dateSpan.textContent = new Date().toLocaleTimeString()



        // Apppending children to parent
        cardDiv.appendChild(dateSpan)
        cardContainer.appendChild(cardDiv)



    }

}
function randomColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
    return color
}