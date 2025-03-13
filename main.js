const addToDoButton = document.getElementById("addToDo"); // + button
const toDoContainer = document.getElementById("toDoContainer"); // holds tasks
const inputField = document.getElementById("inputField"); // writes tasks

// ensures theres not a blank submission
function isBlank() {
  const userInput = inputField.value.trim();

  if (userInput === "") {
    alert("Empty Field");
    return true;
  } else {
    return false;
  }
}

addToDoButton.addEventListener("click", function () {
  if (isBlank()) {
    return;
  }

  const paragraph = document.createElement("p");

  paragraph.classList.add("paragraph-styling"); // css styling

  paragraph.innerText = inputField.value.trim();

  toDoContainer.appendChild(paragraph);
  saveTasks();

  inputField.value = ""; // clears input for next task

  // puts line through item when clicking on it and removes when clicked again
  paragraph.addEventListener("click", function () {
    if (paragraph.style.textDecoration === "line-through") {
      paragraph.style.textDecoration = "none";
    } else {
      paragraph.style.textDecoration = "line-through";
    }
    saveTasks();
  });

  // removes from list if double-clicked, regardless of line-through status
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
    saveTasks();
  });
});

// saves to local storage
function saveTasks() {
  let tasks = [];
  toDoContainer.querySelectorAll("p").forEach(function (item) {
    tasks.push(item.innerText.trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
