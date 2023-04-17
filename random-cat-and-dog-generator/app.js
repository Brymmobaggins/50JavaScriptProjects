const catResult = document.getElementById('cat-result')
const dogResult = document.getElementById('dog-result')
const catButton = document.getElementById('cat-btn')
const dogButton = document.getElementById('dog-btn')


catButton.addEventListener('click', getRandomCat)
dogButton.addEventListener('click', getRandomDog)

function getRandomCat() {

    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            catResult.innerHTML = `<img src="${data.image}"/> `
        })
}
function getRandomDog() {

    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.url}"/> `
        })
}