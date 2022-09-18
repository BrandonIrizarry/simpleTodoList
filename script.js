const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");


// Add strikethrough facility to all existing li elements
const todoItems = Array.from(document.querySelectorAll("li"));
todoItems.forEach(todo => todo.addEventListener("click", () => { todo.classList.toggle("done"); }));

// Add delete facility to all existing "Delete" buttons
const deleteButtons = Array.from(document.querySelectorAll(".delete"));
deleteButtons.forEach(dbutton => dbutton.addEventListener("click", e => e.target.parentNode.remove()));

function createListElement() {
    // Make the list element
    const li = document.createElement("li");
    li.addEventListener("click", () => { li.classList.toggle("done"); });
    li.appendChild(document.createTextNode(input.value));

    // Make the delete-button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete"); // for consistency with existing delete-buttons
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", e =>	e.target.parentNode.remove()); // remove parent div

    // Make the container div for the list element and delete-button
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("grid");
   
    containerDiv.appendChild(li);
    containerDiv.appendChild(deleteButton);
    ul.appendChild(containerDiv);
    
    input.value = "";
}

function inputLength () {
    return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
	    createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	    createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


