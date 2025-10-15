const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

// Toggle dark/light mode
themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
});

// Add new task
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

		// Delete task
		li.querySelector(".delete-btn").addEventListener("click", () => {
			li.remove();
		});

		// Mark as complete
		li.querySelector(".complete-btn").addEventListener("click", () => {
			li.classList.toggle("completed");
		});

		// Edit task (fixed bug)
		li.querySelector(".edit-btn").addEventListener("click", () => {
			const currentText = li.querySelector("span").innerText;
			const newText = prompt("Edit task:", currentText);

			// ✅ Fix: only update if newText is not null or empty
			if (newText !== null && newText.trim() !== "") {
				li.querySelector("span").innerText = newText.trim();
			}
		});
	}
});
