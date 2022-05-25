const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkValid();
});

function checkValid() {
    const userName = document.getElementById("user-name");
    const passWord = document.getElementById("pass-word");
    const para = document.querySelector("p");

    // if (userName.value === "") {
    //     para.textContent = 'You need to logged in continue'
    // } else if (passWord.value === "") {
    //     para.textContent = " you need to log in"
    // } else {

    // }
    userName.value === "" ? para.textContent = `You need to logged continue` : para.textContent = `you need to log in`

}
