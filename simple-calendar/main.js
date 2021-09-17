const select = document.querySelector('select')
const list = document.querySelector('ul')
const h2 = document.querySelector('h2')


// add `onchange` event handler to detect when the value of `select` menu is changed
select.onchange = function () {
    let choice = select.value
    let days = 31
    if (choice === "Febuary") {
        days = 28
    } else if (choice === "April" || choice === "June" || choice === "September" || choice === "November") {
        days = 30
    }
    createCalender(days, choice)
}


// function to look up days and selected and month
function createCalender(days, choice) {
    list.innerHTML = ""
    h2.textContent = choice
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li')
        listItem.textContent = i
        list.appendChild(listItem)
    }
}
createCalender(31, "")