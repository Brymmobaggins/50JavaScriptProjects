// grab the form and prevent submission 
const form = document.getElementById('form')

// item arrays for new items
let items = []

// function call for local storage
displayLocalStorage()

// submit new to todo list
form.addEventListener("submit", function (e) {
    // prevent submission
    e.preventDefault()
    // grab input value
    let todoInput = document.getElementById("todo-input").value
    // if input is empty/blank do nothing
    if (todoInput === "") {
        alert("Please enter a valid input")
    } else {
        // display items
        displayItems(todoInput)

        // place todo in the local storage
        storeItem(todoInput)

        // clear to do item field
        document.getElementById("todo-input").value = ""

        // add event listeners to the delete button
        addDeleteFunction(todoInput)
    }
})


// function to store items in the local Storage
function storeItem(item) {
    items.push(item)
    localStorage.setItem('item', JSON.stringify(items))
}

// function to display items in the DOM
function displayItems(todoInput) {

    // create a li tag for the element
    let todoItem = document.createElement("li")
    todoItem.innerHTML = `${todoInput}<div class="delete-item">Delete</div>`

    // Display to do item
    let todoList = document.querySelector("ul")
    todoList.appendChild(todoItem)
}

// function display in the local storage

function displayLocalStorage() {

    let storage = localStorage.getItem("item")
    // if storage is null
    if (storage === null) {
        items = []
    } else {
        let storageParsed = JSON.parse(storage);
        storageParsed.forEach(function (storageItem) {
            displayItems(storageItem)
        })

    }
}
// function to delete item 

function addDeleteFunction(todoInput) {

    let deleteButton = document.querySelectorAll('.delete-item');

    deleteButton.forEach(function (button, index) {
        button.addEventListener('click', function (e) {
            console.log(e.path[1].childNodes);

            //remove index number from localStorage
            let deletedStorage = localStorage.getItem('item');
            let deletedStorageParsed = JSON.parse(deletedStorage);

            deletedStorageParsed.splice(index, 1);
            console.log(deletedStorageParsed);
            localStorage.setItem('item', JSON.stringify(deletedStorageParsed));
            if (deletedStorageParsed.length === 0) {
                let todoList = document.querySelector('ul');
                todoList.innerHTML = '';
                let todoItem = document.createElement('li');
                todoItem.innerHTML = `No more todos!`;

                todoList.appendChild(todoItem);
                displayLocalStorage();

            } else {
                localStorage.setItem('item', JSON.stringify(deletedStorageParsed));
            }


        })
    })
}
