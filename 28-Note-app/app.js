/** @format */

// onst { IconGear } = require("@stackoverflow/stacks-icons/icons");c

// Select DOM elements
const openModalBtn = document.querySelector("#open-modal");
const overlay = document.querySelector("#overlay");
const closeModalBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const addNoteBtn = document.querySelector("#add-note");
const cardContainer = document.querySelector(".cards-container");

let editingCard = null;

// Add event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Open modal
function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

// close the modal when user clicks outside the modal
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    closeModal();
  }
});
// Close modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  editingCard = null;
  addNoteBtn.textContent = "Add Note";
}

// Close modal and create/update note on click
addNoteBtn.addEventListener("click", function () {
  let userInput = document.getElementById("note-text").value;

  if (!userInput) {
    alert("Please enter some text to create a note");
    return;
  }
  if (editingCard) {
    editingCard.querySelector("p").textContent = userInput;
    editingCard.style.backgroundColor = randomColor();
    editingCard = null;
  } else {
    createNote();
  }
  closeModal();
  document.getElementById("note-text").value = "";
  saveToLocalStorage();
});

// Get user input
let inputEl = document.getElementById("note-text");

// function Create note card
function createNote() {
  // Get user input
  let userInput = inputEl.value;

  // Validate input
  if (!userInput) {
    alert("Please enter some text to create a note");
    openModal();
  } else {
    // Create card
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `<p>${userInput}</p>`;

    // Random background color
    cardDiv.style.backgroundColor = randomColor();

    // Create footer
    const cardfooter = document.createElement("div");
    cardfooter.className = "card-footer";

    // Create date span
    const dateEl = document.createElement("span");
    dateEl.textContent = new Date().toLocaleDateString();

    const timeEl = document.createElement("span");
    timeEl.textContent = new Date().toLocaleTimeString("default", {
      month: "short",
    });

    // Create edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<span class="material-symbols-outlined">
        edit_square
        </span>`;

    // Edit note on click
    editBtn.addEventListener("click", function () {
      editNote(cardDiv);
    });

    // Create delete button
    const deletBtn = document.createElement("button");
    deletBtn.id = "delete";
    deletBtn.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`;

    // Delete note on click
    deletBtn.addEventListener("click", function () {
      cardDiv.remove();
      saveToLocalStorage();
    });
    // Add children to footer
    cardfooter.append(deletBtn, editBtn, dateEl, timeEl);

    // Add footer to card
    cardDiv.appendChild(cardfooter);

    // Add card to container
    cardContainer.appendChild(cardDiv);

    // Save to local storage
    saveToLocalStorage();
  }
}
// Edit note
function editNote(cardDiv) {
  editingCard = cardDiv;
  addNoteBtn.textContent = "Update Note";
  openModal();
  const noteText = cardDiv.querySelector("p").textContent;
  document.getElementById("note-text").value = noteText;
}

function backgroundColorOption() {}

// Generate random color
function randomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

// Save notes to local storage
function saveToLocalStorage() {
  let cardContent = [];
  // let currentDate = new Date().toLocaleDateString();

  document.querySelectorAll(".card").forEach(function (card) {
    cardContent.push({
      noteText: card.querySelector("p").textContent,
      date: card.querySelector(".card-footer span").textContent,
    });
  });

  localStorage.setItem("cardContent", JSON.stringify(cardContent));
}
function showDeleteOrEdit() {
  const btnHover = e.target.id;
  if (btnHover === "delete") {
    showDeletePopup();
  } else if (btnHover === "edit") {
    showEditPopup();
  }
}

function showDeletePopup() {
  const deletePopup = document.createElement("div");
  deletePopup.textContent = "Delete";
  deletePopup.classList.add("delete-popup");

  document.body.appendChild(deletePopup);
}

function showEditPopup() {
  const editPopup = document.createElement("div");
  editPopup.textContent = "Edit";
  editPopup.classList.add("edit-popup");

  document.body.appendChild(editPopup);
}
