
const openModalBtn = document.querySelector('#open-modal')
const overlay = document.querySelector('#overlay')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const addNoteBtn = document.querySelector('#add-note')
const cardContainer = document.querySelector('.cards-container')

// const div = cardContainer.querySelector('.cards-container')
// console.log(div)

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

function createNote() {
    const noteText = document.getElementById('note-text').value

    if (!noteText) {
        alert("Please enter note text")
        openModal()
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

// Function to generate random color for the card background color
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
// window.onclick = function (event) {
//     if (event.target.id == "overlay") {
//         event.target.classList.remove('shake')
//         void event.target.offsetWidth
//         event.target.classList.add('shake');

//     } else {
//         event.target.classList.remove("shake")

//     }
//     // console.log(event)

// };
window.onclick = function (event) {
    shakeModal(event)
}
function shakeModal(event) {
    if (event.target.id === "overlay") {
        event.target.classList.remove('shake')
        void event.target.offsetWidth
        event.target.classList.add('shake');
    }
    return false
}

// function to shake the modal
// function shakeModal(event) {
//     event.target.classList.remove('shake');
//     void event.target.offsetWidth
//     event.classList.add('shake');
// }

