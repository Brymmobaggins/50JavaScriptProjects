/** @format */

document.addEventListener("DOMContentLoaded", () => {
  async function fetchUserProfile(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      // convert fetch data to JSON and assign it to a variable called `data`
      const data = response.json();

      return data;
    } catch (error) {
      // catch error in the devtools
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async function displayUserProfile() {
    const usernameInput = document.getElementById("input").value;
    const output = document.getElementById("output");

    if (!usernameInput) {
      output.innerHTML = `<p style="text-align:center; color: red">Please enter github username</p>`;
      return;
    }
    output.innerHTML = `<p>Fetching user profile</p>`;

    const user = await fetchUserProfile(usernameInput);

    if (user) {
      output.innerHTML = `
      <div style="">
         <img src="${user.avatar_url}" width="100" style="border-radius: 50%" />
         <p>${user.name || "Not available"}</p>
         <p>${user.bio || "No bio provided"}</p>
         <p>Repo: ${user.public_repos}</p>
         <p>Followers: ${user.followers} || ${user.following} following </p>
      </div>
        `;
    } else {
      output.innerHTML = `<p style="color:red">User not found, please try again!</p>`;
    }
  }
  document
    .getElementById("fetchBtn")
    .addEventListener("click", displayUserProfile);
  document
    .getElementById("input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        displayUserProfile();
      }
    });
});
