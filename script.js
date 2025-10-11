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

    // Edit task: respect Cancel and empty input
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const spanEl = li.querySelector("span");
      const currentText = spanEl.innerText;
      const result = prompt("Edit task:", currentText);

      // If user cancels (null) or submits empty/whitespace, keep unchanged
      if (result === null) return;
      const trimmed = result.trim();
      if (trimmed === "") return;

      spanEl.innerText = trimmed;
    });
  }
});
