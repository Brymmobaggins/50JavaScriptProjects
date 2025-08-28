/** @format */

const output = document.getElementById("output");
let jokesArr = [];

async function fetchJoke() {
  const response = await fetch("jokes.json");
  jokesArr = await response.json(); // store jokes in the array
}

function randomJoke() {
  if (jokesArr.length === 0) {
    output.innerHTML = "<p>No jokes available yet. Try again.</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * jokesArr.length);
  const jokes = jokesArr[randomIndex];

  output.innerHTML = `
    <div style="text-align:center">
      <p style="font-size: 1.5rem">${jokes.joke}</p> <br/>
      <small>${jokes.answer}</small>
    </div>
  `;
}

document.getElementById("getJokeBtn").addEventListener("click", randomJoke);

// 4️⃣ Load jokes as soon as the page opens
fetchJoke();
