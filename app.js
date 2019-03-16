function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

// Event Listener
  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text
    let title = NEW_TODO_TEXT.value;

    // create a new li
    let newLi = document.createElement('li'); //<li></li>

    // create new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event) {
      //this.parentElement represents element's parent
      TODO_LIST.removeChild(this.parentElement);
    })

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li input
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    // attach the new li to the ul (toDoList)
    TODO_LIST.appendChild(newLi);

    // empty the to-do input box for user
    NEW_TODO_TEXT.value = "";
  });

};

window.onload = function() {
  onReady();
};
