import { storeProject } from './storeProjectLS'

function handleFormSubmit(event) {
  event.preventDefault();

  let projectList = JSON.parse(localStorage.getItem('projectList'))
  let currentProject = document.getElementsByClassName('currentProject')[0];
  let index = projectList.findIndex(x => x.key === (currentProject.id).toString());
  projectList.splice(index, 1);
  const projectArrayJSON = JSON.stringify(projectList, null, 2);
  localStorage.setItem('projectList', projectArrayJSON);
  currentProject.remove();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  const replacements = {
    "editProjectTitle" : "projectTitle",
    "editProjectDescription" : "projectDescription",
    "editProjectDueDate" : "projectDueDate"
  };

  let replacedItems = Object.keys(formJSON).map((key) => {
    const newKey = replacements[key] || key;
    return { [newKey] : formJSON[key] };
  });

  const newTab = replacedItems.reduce((a, b) => Object.assign({}, a, b));
  

  closeModal();
  storeProject(newTab);
};

const setEditProjectSubmitListener = () => {
  const form = document.querySelector('#editProject-modal');
  form.addEventListener('submit', handleFormSubmit);
};

const closeModal = () => {
  const form = document.getElementById('editProject-modal');
  form.style.display = 'none';
  document.getElementById('editProject-form').reset();
};


export { setEditProjectSubmitListener };