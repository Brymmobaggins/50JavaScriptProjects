
const openModalBtn = document.querySelector('#open-modal')
const overlay = document.querySelector('#overlay')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')
const addNoteBtn = document.querySelector('#add-note')
const cardContainer = document.querySelector('.cards-container')

openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)


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

// 
addNoteBtn.addEventListener("click", function () {
    closeModal()
    createNote()
    document.getElementById("note-text").value = ""
})


function createNote() {

    const noteInput = document.getElementById('note-text').value.trim()


    if (!noteInput) {
        alert("Please enter note text")
        openModal()
    } else {
        const cardDiv = document.createElement('div')
        cardDiv.className = "card"
        cardDiv.innerHTML = `<p>${noteInput}</p>`

        // changes card background color randomly
        cardDiv.style.backgroundColor = randomColor()

        const cardfooter = document.createElement("div")
        cardfooter.className = "card-footer"
        //  Creating a span element for date
        const dateEl = document.createElement('span')

        //  Adding date to span element
        dateEl.textContent = new Date().toLocaleDateString()

        const editBtn = document.createElement('button')
        editBtn.innerHTML = `<span class="material-symbols-outlined">
        edit_square
        </span>`

        editBtn.addEventListener('click', function () {
            editNote(noteInput)
        })

        const deletBtn = document.createElement("button")
        deletBtn.innerHTML = `<span class="material-symbols-outlined">delete
        </span>`

        deletBtn.addEventListener("click", function(){
            cardDiv.remove()
        })

        // Apppending  all children to their respective parent
        cardDiv.appendChild(cardfooter)
        cardfooter.appendChild(deletBtn)
        cardfooter.appendChild(editBtn)
        cardfooter.appendChild(dateEl)
        cardContainer.appendChild(cardDiv)


    }

}

// Function to generate random color for the card background color
function randomColor() {
    const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
    return color
}

//  function to edit note
function editNote(noteInput) {
    openModal()
    document.getElementById("note-text").value = noteInput
    // createNote().value = ""
    // const updateDiv = document.getElementById("div")
}


// window.onclick = function (event) {
//     shakeModal(event)
// }
// function shakeModal(event) {
//     if (event.target.id == "overlay") {
//         event.target.classList.remove('shake')
//         void event.target.offsetWidth
//         event.target.classList.add('shake');
//     }
//     return true
// }

// function saveNotes() {

//     // empty array to notes
//     let notes = []

//     // get all the P element in carddiv
//     cardDiv.querySelectorAll("p").forEach(element => {
//         notes.push(element.textContent.trim())
//         console.log()

//     });
//     // set note to local storage and convert to JSON format
//     localStorage.setItem("notes", JSON.stringify(notes))

// }


