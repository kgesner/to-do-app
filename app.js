function onReady() {
  const addToDoForm = document.getElementById ('addToDoForm');
  const newToDoText= document.getElementById ('newToDoText');
  const toDoList = document.getElementById('toDoList');

// Event Listener
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul

  toDoList.appendChild(newLi);

  // empty the input
  newToDoText.value = ' ';
  });
}

// Event Handler
window.onload = function() {
  onReady();
};