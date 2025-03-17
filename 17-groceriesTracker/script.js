/** @format */

const btn = document.querySelector("button");

// btn.addEventListener("click", addItem)

const input = document.getElementById("item-value");
function addItem() {
  let myItem = input.value;
  
  
  if (!myItem) {
    alert("hello");
  } else {
    const ul = document.getElementById("item-list");

    const listItem = document.createElement("li");
    ul.appendChild(listItem);

    const listText = document.createElement("span");
    listText.textContent = myItem;
    listItem.appendChild(listText);
  }
  input.value = ""

  
}

btn.onclick = addItem;
