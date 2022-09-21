import { selectProject } from './selectProject'
import { openModal } from './showProjectModal'


let deleteProjBtn = document.getElementById('deleteProject-button');

const deleteProjectListener = () => {
  deleteProjBtn.addEventListener('click', event =>{
    if (document.querySelector('.currentProject') != null) {
      let currentProject = document.getElementsByClassName('currentProject')[0];
      localStorage.removeItem(currentProject.id);
      currentProject.remove();
      if (localStorage.key(0) != null) {
        let key = localStorage.key(0);
        let newCurrentProject = JSON.parse(localStorage.getItem(key));
        selectProject(newCurrentProject);
      } else {
        openModal();
      }
    } else {
      openModal();
    }
  })
};

export { deleteProjectListener };