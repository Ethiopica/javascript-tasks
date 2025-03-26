/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/
function Task(title, description, completed = false) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

// Array to hold all tasks
const tasks = [];

// Function to display tasks on the page
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the task list before displaying
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Status: ${task.completed ? "Completed" : "Pending"}</p>
      `;
    taskList.appendChild(taskElement);
  });
}

// Add a new task to the tasks array and display it
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const newTask = new Task(
    "New Task", // title
    "This is a new task description", // description
    false // completed (initially false)
  );
  tasks.push(newTask); // Add the new task to the tasks array
  displayTasks(); // Update the display
});
