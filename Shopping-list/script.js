const input = document.getElementById("item");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
//   const para = document.querySelector("p");

btn.addEventListener("click", function () {
    let myItem = input.value;
    input.value = "";

    // if (myItem === "") {
    // //   btn.disabled = true;
    //   para.textContent = "Your item cannot be empty";
    // //   ul.textContent = "";
    // } else {
    // //   para.textContent = "";
    // }

    // create an element that hold reference to the list
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    ul.appendChild(listItem);

    listBtn.onclick = function (e) {
        ul.removeChild(listItem);
    };
    input.focus();
});
