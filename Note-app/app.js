
const openModalBtn = document.querySelector('#open-modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const addNoteBtn = document.querySelector('#add-note')
const cardContainer = document.querySelector('.cards-container')

// function to open the modal
function openModal() {
    modal.style.display = "block"
    overlay.style.display = "block"
}
// function to close the modal
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

openModalBtn.addEventListener('click', function () {
    openModal()
})
closeModalBtn.addEventListener('click', function () {
    closeModal()
})

// 
addNoteBtn.addEventListener("click", function () {
    closeModal()
    createNote()
    document.getElementById('note-text').value = ""
})

const noteText = document.getElementById('note-text').value
function createNote() {

    if (!noteText) {
        alert("Please enter note text")
    } else {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML = `<p>${noteText}</p>`

        // changes card background color randomly
        cardDiv.style.backgroundColor = randomColor()

        const cardfooter = document.createElement("div")
        cardfooter.classList.add("card-footer")
        //  Creating a span element for date
        const dateEl = document.createElement('span')

        //  Adding date to span element
        dateEl.textContent = new Date().toLocaleDateString()

        const editBtn = document.createElement('button')
        editBtn.innerHTML = `<span class="material-symbols-outlined">
        edit_square
        </span>`

        editBtn.addEventListener('click', function () {
            editNote(noteText)
        })
        // Apppending  all children to their respective parent
        cardDiv.appendChild(cardfooter)
        cardfooter.appendChild(editBtn)
        cardfooter.appendChild(dateEl)
        cardContainer.appendChild(cardDiv)

    }

}

// Function to generate random color
function randomColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
    return color
}


//  function to edit note
function editNote(noteText) {
    openModal()
    document.getElementById('note-text').value = noteText

}

// function  to close the modal when click outside modal
window.onclick = function (event) {
    if (event.target === overlay) {
        shakeModal()
    }
};

// function to shake the modal
function shakeModal() {
    modal.classList.add('shake');
}

