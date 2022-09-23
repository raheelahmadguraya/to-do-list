import { storeToDo } from './storeToDoinLS'

function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  closeModal();
  storeToDo(formJSON);
};

const setToDoSubmitListener = () => {
  const form = document.querySelector('#addTodo-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('addTodo-modal');
  form.style.display = 'none';
  document.getElementById('addTodo-form').reset();
};

export { setToDoSubmitListener };