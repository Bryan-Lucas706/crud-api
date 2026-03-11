//const form = document.getElementById("form");
//const btnSubmit = document.getElementById("btn-submit");

//btnSubmit.addEventListener("submit", getUsers);

async function getUsers() {
  const response = await fetch("http://localhost:8000/api/users");
  const users = await response.json();

  console.log(users);
  //  renderUsers(users);
}

await getUsers();

//function renderUsers() {}
