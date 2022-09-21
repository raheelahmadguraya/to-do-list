function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  formJSON.priority = data.getAll('priority');
  formJSON.priority = formJSON.priority.toString();

  const result = JSON.stringify(formJSON, null, 2);
  localStorage.setItem('result', result);

  closeModal();
  let todoItem = JSON.parse(localStorage.getItem('result'));
  console.log(todoItem)
  console.log(todoItem.priority)
}

const setSubmitListener = () => {
  const form = document.querySelector('#addTodo-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('addTodo-modal');
  form.style.display = 'none';
  document.getElementById('addTodo-form').reset();
};

export { setSubmitListener };
