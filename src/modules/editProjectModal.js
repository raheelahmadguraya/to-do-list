//get modal element
let modal = document.getElementById('editProject-modal');
//get open modal button
let modalBtn = document.getElementById('editProject-button');
//get close button
let closeBtn = document.getElementsByClassName('closeBtn')[2];

const setEditProjectListener = () => {
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);
};

const openModal = () => {
  document.getElementById('editProject-form').reset();
  let projectList = JSON.parse(localStorage.getItem('projectList'))
  if (projectList.length != 0) {
    let currentProject = document.getElementsByClassName('currentProject')[0];
    let index = projectList.findIndex(x => x.key === (currentProject.id).toString());
    let projectToEdit = projectList[index];
    
    let formDisplayProjectTitle = document.getElementById('editProjectTitle');
    formDisplayProjectTitle.setAttribute("value", projectToEdit.projectTitle);

    let formDisplayProjectDescription = document.getElementById('editProjectDescription');
    formDisplayProjectDescription.innerHTML = projectToEdit.projectDescription;

    let formDisplayProjectDueDate = document.getElementById('editProjectDueDate');
    formDisplayProjectDueDate.setAttribute("value", projectToEdit.projectDueDate);

    modal.style.display = 'grid';
  }
};

const closeModal = () => {
  modal.style.display = 'none';
};

const clickOutside = (event) => {
  if(event.target == modal){
    modal.style.display = 'none';
  }
};

export { setEditProjectListener, openModal };