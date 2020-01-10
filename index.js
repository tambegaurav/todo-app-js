let ourForm = document.querySelector('#ourForm');
let newTodo = document.querySelector('#newTodo');
let todoList = document.querySelector('#todoList');

ourForm.addEventListener('submit', e => {
  e.preventDefault();
  createItem(newTodo.value);
});

createItem = x => {
  let myHTML = `<li class=" blue lighten-3 collection-item"> 
  ${x}  <button class="secondary-content waves-effect waves-light" onCLick="deleteItem(this)">Remove</button> </li>`;
  todoList.insertAdjacentHTML('beforeend', myHTML);
  newTodo.value = null;
  newTodo.focus();
};

deleteItem = elementToDelete => {
  elementToDelete.parentElement.remove();
};
