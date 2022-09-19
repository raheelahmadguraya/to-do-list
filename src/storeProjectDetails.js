function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());
  
  console.log(JSON.stringify(formJSON, null, 2));
  closeModal();
}

const setProjectSubmitListener = () => {
  const form = document.querySelector('#addProject-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('addProject-modal');
  form.style.display = 'none';
};

export { setProjectSubmitListener };
