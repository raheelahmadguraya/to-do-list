function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  formJSON.priority = data.getAll('priority');
  
  console.log(JSON.stringify(formJSON, null, 2));
  closeModal();
}

const setSubmitListener = () => {
  const form = document.querySelector('#addTodo-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('addTodo-modal');
  form.style.display = 'none';
};

export { setSubmitListener };
