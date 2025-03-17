

(function () {

    // array of pictures
    const pictures = ["Rabbit-1", "snake-2", "cat-3", "Dog-4", "monkey-5", "peacock-6", "owl-7", "food-8", "culture-9", "egypt-10"];


    // select button left right and add event listeners
    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.getElementById('img-container')
    let counter = 0;

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('prev')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imgDiv.style.backgroundImage = `url('img/${pictures[counter]}.jpg')`

            }
            if (button.classList.contains('next')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0
                }
                imgDiv.style.backgroundImage = `url('img/${pictures[counter]}.jpg')`

            }
        }
        )
    });
})()