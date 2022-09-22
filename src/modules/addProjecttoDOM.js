import { selectProject, setSelectProjectListener } from './selectProject'

const addToDom = (key) => {
  let projectList = JSON.parse(localStorage.getItem("projectList"));
  let currentProject = projectList[key];

  let projectSidebar = document.getElementsByClassName('projectList')[0];
  const projectSideBarLink = document.createElement("button");
  projectSideBarLink.classList.add("selectProject-button");
  let projectTitle = currentProject.projectTitle.replace(/\s/g, '-');
  projectSideBarLink.classList.add(projectTitle);
  projectSideBarLink.setAttribute('id', currentProject.key); 

  const projectSBDisplayName = document.createElement("p");
  projectSBDisplayName.innerHTML = currentProject.projectTitle;
  projectSideBarLink.appendChild(projectSBDisplayName);
  projectSidebar.appendChild(projectSideBarLink);

  selectProject(key);
  setSelectProjectListener();
};

export { addToDom };
