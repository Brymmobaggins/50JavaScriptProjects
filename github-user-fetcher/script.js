/** @format */

document.addEventListener("DOMContentLoaded", () => {
  async function fetchUserProfile() {
    try {
      const response = fetch("https://api.github.com/users/${username}");
      if (!response.ok) {
        throw new Error("User not found");
      }
      //   convert fetch data to JSON and assign it to a variable called `data`
      const data = (await response).json();

      return data;
    } catch (error) {

     // catch error in the devtools
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async function displayUserProfile() {
    const username = document.getElementById("input").value;
    const output = document.getElementById("output");

    if (!username) {
      output.innerHTML = `<p>Please enter user github username</p>`;
      return;
    }
    output.innerHTML = `<p>fetching User profile</p>`;

    const user = await fetchUserProfile(username);

    if (user) {
      output.innerHTML = `
      div>
         <h3>${user.message || "Not available"}</h3>
         <p>${user.status}</p>
      </div>
        `;
    } else {
      output.innerHTML = `<p style="color:red">User not found, please try again!</p>`;
    }
  }
  document
    .getElementById("fetchBtn")
    .addEventListener("click", displayUserProfile);
});
