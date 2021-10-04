const input = document.getElementById("item");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let myItem = input.value;
    input.value = "";
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = input.value;

    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    ul.appendChild(listItem);
     
    // button click to when is to deleted
    listBtn.onclick = function (e) {
        ul.removeChild(listItem);
    };
    input.focus();
});

