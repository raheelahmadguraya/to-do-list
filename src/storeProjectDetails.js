import { createProject } from './createProject'

function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  createProject(formJSON);
  closeModal();
}

const setProjectSubmitListener = () => {
  const form = document.querySelector('#addProject-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('addProject-modal');
  form.style.display = 'none';
  document.getElementById('addProject-form').reset();
};

export { setProjectSubmitListener };
