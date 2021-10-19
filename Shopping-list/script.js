const input = document.getElementById("item");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const para = document.querySelector("p")

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
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    ul.appendChild(listItem);

    // delete the listitem
    listBtn.onclick = function (e) {
        ul.removeChild(listItem);
    };
    input.focus();
});
