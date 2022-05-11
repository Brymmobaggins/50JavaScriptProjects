const input = document.getElementById("item");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const para = document.querySelector("p")

// const toggleBtn = document.getElementById('mode')

btn.addEventListener("click", function () {
    let myItem = input.value;
    input.value = "";

    // condition to check if the input value is empty
    if (myItem === "") {
        para.textContent = "Enter an item and add it to your list"
        e.preventDefault()   // to prevent default submit
    } else {
        para.textContent = ""
    }

    const listItem = document.createElement("li");
    ul.appendChild(listItem);

    const listText = document.createElement("span");
    listText.textContent = myItem;
    listItem.appendChild(listText);
    
    const listBtn = document.createElement("button");
    listBtn.textContent = "X";
    listItem.appendChild(listBtn);

    // delete the listitem
    listBtn.onclick = function (e) {
        ul.removeChild(listItem);
    };
    input.focus();
});

// toggleBtn.onclick = function(){
//     let element = document.body
//     element.classList.toggle("darkmode")

// }


