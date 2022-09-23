import { selectProject } from './selectProject'
import { openModal } from './showProjectModal'


let deleteProjBtn = document.getElementById('deleteProject-button');

const deleteProjectListener = () => {
  deleteProjBtn.addEventListener('click', event =>{
    if (document.querySelector('.currentProject') != null) {
      let currentProject = document.getElementsByClassName('currentProject')[0];

      let projectList = JSON.parse(localStorage.getItem('projectList'));
      let index = projectList.findIndex(x => x.key === (currentProject.id).toString())
      projectList.splice(index, 1);
      const projectArrayJSON = JSON.stringify(projectList, null, 2);
      localStorage.setItem('projectList', projectArrayJSON);

      currentProject.remove();
      let projectMainTitle = document.getElementsByClassName('project-title')[0];
      projectMainTitle.innerHTML = '';
      let projectDueDate = document.getElementsByClassName('project-dueDate')[0];
      projectDueDate.innerHTML = '';
      let projectDescriptionSection = document.getElementsByClassName('project-details')[0];
      projectDescriptionSection.innerHTML = '';    
      let toDoListSection = document.getElementsByClassName("todo-list")[0];
      toDoListSection.innerHTML = '';

      if ((JSON.parse(localStorage.getItem('projectList'))).length != 0) {
        let key = 0;
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