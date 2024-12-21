/** @format */

const animeContainer = document.getElementById("anime-result");
const animeButton = document.getElementById("anime-btn");

// Add event listener when the DOM is loaded
document.addEventListener("DOMContentLoaded", getAnime);

// Add event listener to the button
animeButton.addEventListener("click", getAnime);

// Function to fetch anime data from the API and update the HTML content with the fetched data
async function getAnime() {
  try {
    const response = await fetch("https://nekos.best/api/v2/neko");
    const data = await response.json();
    // Update the HTML content with the fetched data
    animeContainer.innerHTML = `
        <h3><strong>Name:</strong> ${data.results[0].artist_name}</h3>
        <h4></h4>
        <img src="${data.results[0].url}" lazy="loading" />
        `;
  } catch (error) {
    console.error("Error fetching anime data:", error);
  }
}
