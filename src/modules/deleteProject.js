import { selectProject } from './selectProject'
import { openModal } from './showProjectModal'


let deleteProjBtn = document.getElementById('deleteProject-button');

const deleteProjectListener = () => {
  deleteProjBtn.addEventListener('click', event =>{
    if (document.querySelector('.currentProject') != null) {
      let currentProject = document.getElementsByClassName('currentProject')[0];

      let projectList = JSON.parse(localStorage.getItem('projectList'));
      projectList.splice(currentProject.id, currentProject.id)
      console.log(projectList);
      const projectArrayJSON = JSON.stringify(projectList, null, 2);
      localStorage.setItem("projectList", projectArrayJSON);

      currentProject.remove();

      if ((JSON.parse(localStorage.getItem('projectList'))).length != 0) {
        let key = 0
        selectProject(key);
      } else {
        openModal();
      }
    } else {
      openModal();
    }
  })
};

export { deleteProjectListener };