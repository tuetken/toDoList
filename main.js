// assigns variable "addToDoButton" to HTML button "addToDo"
const addToDoButton = document.getElementById("addToDo");
// assigns variable "addToListButton" to HTML div "toDoContainer"
const toDoContainer = document.getElementById("toDoContainer");
// assigns variable "inputField" to HTML field "inputField"
const inputField = document.getElementById("inputField");

// ensures theres not a blank submission for a task
function isBlank() {
  const userInput = inputField.value.trim();

  if (userInput === "") {
    alert("Empty Field");
    return true;
  } else {
    return false;
  }
}

// adds an event listener for clicks onto the addToDoButton
addToDoButton.addEventListener("click", function () {
  if (isBlank()) {
    return;
  }

  // creates a paragraph element in HTML for each click on the user's to do list
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  // allows us to assign user input into the field and convert it to html (p element)
  paragraph.innerText = inputField.value.trim();
  // assigns the location of paragraph element inside the toDoContainer div
  toDoContainer.appendChild(paragraph);
  saveTasks();
  // resets input field after clicking button
  inputField.value = "";

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
