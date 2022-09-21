import { selectProject } from './selectProject'
import { openModal } from './showProjectModal'


let deleteProjBtn = document.getElementById('deleteProject-button');

const deleteProjectListener = () => {
  deleteProjBtn.addEventListener('click', event =>{
    let currentProject = document.getElementsByClassName('currentProject')[0];
    localStorage.removeItem(currentProject.id);
    currentProject.remove();
    let key = localStorage.key(0);
    let newCurrentProject = JSON.parse(localStorage.getItem(key));
    selectProject(newCurrentProject);
  })
};

export { deleteProjectListener };