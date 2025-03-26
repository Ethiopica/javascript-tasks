//Create an array `users` where each user has `name` and `score`.Add a button in HTML that sorts the users by score in descending order and updates the displayed list.//

const users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 88 },
];

function renderUserList() {
  const userListDiv = document.getElementById("userList");
  userListDiv.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name}: ${user.score}`;
    userListDiv.appendChild(li);
  });
}

document.getElementById("sortButton").addEventListener("click", function () {
  users.sort((a, b) => b.score - a.score);
  renderUserList();
});

renderUserList();
