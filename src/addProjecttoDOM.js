import './styles/main.css'
import { selectProject } from './selectProject'

const addToDom = (project) => {
  let projectSidebar = document.getElementsByClassName('projectList')[0];
  const projectSideBarLink = document.createElement("button");
  projectSideBarLink.classList.add("selectProject-button");
  projectSideBarLink.classList.add(project.projectTitle);

  const projectDisplayName = document.createElement("p");
  projectDisplayName.innerHTML = project.projectTitle;
  projectSideBarLink.appendChild(projectDisplayName);
  projectSidebar.appendChild(projectSideBarLink);

  selectProject(project);
};

export { addToDom };
