async function getUsers() {
  const response = await fetch("http://localhost:8000/api/users");
  const data = await response.json();

  renderUsers(data.users);
}

function renderUsers(users) {
  const usersContainer = document.getElementById("users-container");

  if (users.length === 0) {
    usersContainer.innerHTML = '<p class="no-users">No users found</p>';
  } else {
    usersContainer.innerHTML = ""; 
  }

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="info-user">
        <strong class="name">${user.name}</strong>
        <span><strong>Age: </strong>${user.age}</span>
        <span><strong>Email: </strong>${user.email}</span>
      </div>
      <div class="change-container">
        <button class="edit" id="edit" type="submit">Edit</button>
        <button class="delete" id="delete" type="submit">Delete</button>
      </div>
    `;

    usersContainer.appendChild(card);
  });
}

getUsers();
