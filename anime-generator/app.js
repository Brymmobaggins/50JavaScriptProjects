
const animeContainer = document.getElementById('anime-result')
const animeButton = document.getElementById('anime-btn')

animeButton.addEventListener('click', getAnime)

// using fetch to retrieve data 
function getAnime() {
    fetch('https://nekos.best/api/v2/neko')
        .then(response => response.json())
        .then(data => {
            animeContainer.innerHTML = `<h3><strong>Name: </strong> ${data.results[0].artist_name}</h3>
            <img src="${data.results[0].url}" lazy="loading" />

               
            
            `;
        })
}