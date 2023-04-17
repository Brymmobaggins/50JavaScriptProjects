const foxResult = document.getElementById('fox-result')
const dogResult = document.getElementById('dog-result')
const foxButton = document.getElementById('fox-btn')
const dogButton = document.getElementById('dog-btn')


foxButton.addEventListener('click', getRandomFox)
dogButton.addEventListener('click', getRandomDog)


// function that execute whenever get fox button is clicked
function getRandomFox() {

    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxResult.innerHTML = `<img src="${data.image}"/> `
        })
}

// function that execute whenever get dog button is clicked

function getRandomDog() {

    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.url}"/> `
        })
}