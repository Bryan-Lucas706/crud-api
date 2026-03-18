import { renderUsers } from "./dom/render.js";
import { postUsers } from "./api/post.js";
import { deleteUser } from "./api/delete.js";
import { putUsers } from "./api/update.js";

const apiUrl = "http://localhost:8000/api/users";
const updateBtn = document.getElementById("updateBtn");
const form = document.getElementById("createUser");

const errorMsg = document.getElementById("error-msg");

let users = [];
let currentUserId = null;
let originalUser = null;

function showError(message) {
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
}

/*async function editUser(event) {
  event.preventDefault();

  const btn = event.target.closest(".edit-btn");
  if (!btn) return;

  const id = btn.dataset.id; // Pega o ID do atributo data-id do botão
  await putUsers(apiUrl, id, name, age, email);

  await loadUsers();
}*/

await renderUsers(apiUrl);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value,
    age = document.getElementById("age").value,
    email = document.getElementById("email").value;

  try {
    const user = { name, age, email };

    await postUsers(apiUrl, user);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    await loadUsers();
  } catch (error) {
    showError(error.message);
  }
});

deleteBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const btn = event.target.closest(".delete-btn");
  if (!btn) return;

  if (!confirm("Você tem certeza que deseja deletar esse usuario?")) {
    return;
  }

  const id = btn.dataset.id; // Pega o ID do atributo data-id do botão
  await deleteUser(apiUrl, id);
  await loadUsers(apiUrl);
});

// Adicione os imports ao topo:
import { renderUsers, findUserById } from
  './scripts/dom/render.js';
import { deleteUser } from
  './scripts/api/delete.js';

// Função auxiliar:
function getUserFromCard(button) {
  const card = button.closest('.card');
  return findUserById(Number(card.id));
}

updateBtn.addEventListener("click", editUser);
