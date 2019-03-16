function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');  //  access HTML form

  function createNewToDo() {  // Will uodate array of to-dos
    const newToDoText = document.getElementById('newToDoText'); // Accesses text input for text of to-dos 'title'
    if (!newToDoText.value) { return; }  //  prevent adding empty to-do items

    toDos.push({  // adds new to-do to toDos array using 'push'
      title: newToDoText.value,  //  assign value of newToDoText to 'title' key
      complete:false  //  create key called 'complete' intialized to 'false'
    });

    newToDoText.value = '';  //  clears text input for user

    renderTheUI();  //  call renderTheUI() each time the state changes
  }

  addToDoForm.addEventListener('submit', event => {  //  add EventListener
    event.preventDefault();  //  prevent page from reloading
    createNewToDo();  //  call function
  })

  renderTheUI() {  //  call this function to onReady to immediately render initial UI
    const toDoList = document.getElementById('toDoList');  //  access 'ul' in HTML

    toDoList.textContent = '';  //  set newLi to empty string

    toDos.forEach(function(toDo) {  //  applies function to each item in array, renders to-do as 'li' in 'ul'
      const newLi = document.createElement('li');  //  create 'li'
      const checkbox = document.createElement('input');  //  create checkbox
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;  //  assign toDo's title to newLi

      toDoList.appendChild(newLi);  //  update the DOM
      newLi.appendChild(checkbox);
    });
  };
}

window.onload = function() {
  onReady();
};
