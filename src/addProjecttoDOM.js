import './styles/main.css'
import { selectProject, setSelectProjectListener } from './selectProject'

const addToDom = (project,storageKeyName) => {
  let projectSidebar = document.getElementsByClassName('projectList')[0];
  const projectSideBarLink = document.createElement("button");
  projectSideBarLink.classList.add("selectProject-button");
  let projectTitle = project.projectTitle.replace(/\s/g, '-');
  projectSideBarLink.classList.add(projectTitle);
  projectSideBarLink.setAttribute('id', storageKeyName); 

  const projectSBDisplayName = document.createElement("p");
  projectSBDisplayName.innerHTML = project.projectTitle;
  projectSideBarLink.appendChild(projectSBDisplayName);
  projectSidebar.appendChild(projectSideBarLink);

  selectProject(project);
  setSelectProjectListener();
};

export { addToDom };
