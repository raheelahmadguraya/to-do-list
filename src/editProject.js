import { openModal } from './editProjectModal'

let editProjBtn = document.getElementById('editProject-button');

const editProjectListener = () => {
  editProjBtn.addEventListener('click', event =>{
    if (document.querySelector('.currentProject') != null) {

      let currentProject = document.getElementsByClassName('currentProject')[0];
      let projectToEdit = JSON.parse(localStorage.getItem(currentProject.id));

      let formDisplayProjectTitle = document.getElementById('projectTitle');
      formDisplayProjectTitle.setAttribute("value", projectToEdit.projectTitle);

      let formDisplayProjectDescription = document.getElementById('projectDescription');
      formDisplayProjectDescription.innerHTML = projectToEdit.projectDescription;

      let formDisplayProjectDueDate = document.getElementById('projectDueDate');
      formDisplayProjectDueDate.setAttribute("value", projectToEdit.projectDueDate);
      openModal();

      //formDisplayProjectTitle.removeAttribute("value");
    } else { }
  })
};

export { editProjectListener };