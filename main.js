// assigns variable "addToDoButton" to HTML button "addToDo"
let addToDoButton = document.getElementById("addToDo");
// assigns variable "addToListButton" to HTML div "toDoContainer"
let toDoContainer = document.getElementById("toDoContainer");
// assigns variable "inputField" to HTML field "inputField"
let inputField = document.getElementById("inputField");

// adds an event listener for clicks onto the addToDoButton
addToDoButton.addEventListener("click", function () {
  // creates a paragraph element in HTML for each click on the user's to do list
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  // allows us to assign user input into the field and convert it to html (p element)
  paragraph.innerText = inputField.value;
  // assigns the location of paragraph element inside the toDoContainer div
  toDoContainer.appendChild(paragraph);
});
