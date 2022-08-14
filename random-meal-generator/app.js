const mealButton = document.querySelector('#fetch-meal')
const mealDisplay = document.querySelector('.show-meal')

mealButton.addEventListener('click', () => {
    fetch("https//www.themealdb.com / api / json / v1 / 1 / random.php")
        .then(res => res.json())
        .then(res => {
            getMeal(res.meal[0])
        })

})


function getMeal(meal) {
    mealDisplay.textContent = `<img src = "${meal.strMealThumb}"
            alt = "Meal image" />`

}
