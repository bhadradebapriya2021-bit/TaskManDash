const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="complete-btn">Complete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";

    // Attach event listeners
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });

    li.querySelector(".complete-btn").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // BUG: Edit task function does not work properly
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newText = prompt("Edit task:", li.querySelector("span").innerText);
      // BUG: Forgot to check if user cancels prompt
      li.querySelector("span").innerText = newText; 
    });
  }
});
