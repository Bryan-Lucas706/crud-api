export async function postUsers(apiUrl, user) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: user.name,
      age: user.age,
      email: user.email,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error creating user:", data.error);
    throw new Error(data.error || "Failed to create user");
  }
  return data;
}
