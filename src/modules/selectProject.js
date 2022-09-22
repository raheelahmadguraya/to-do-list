const loadProject = (projectKey) => {
  let projectFromLS = JSON.parse(localStorage.getItem(projectKey));
  return projectFromLS;
};


const selectProject = (key) => {
  let projectList = JSON.parse(localStorage.getItem("projectList"));
  let currentProject = projectList[key];

  let projectMainTitle = document.getElementsByClassName('project-title')[0];
  projectMainTitle.innerHTML = '<h2>' + currentProject.projectTitle + '</h2>';


  let projectDueDate = document.getElementsByClassName('project-dueDate')[0];
  projectDueDate.innerHTML = '<h5>' + 'Project Due Date:' + ' ' + currentProject.projectDueDate + '</h5>';

  let projectDescriptionSection = document.getElementsByClassName('project-details')[0];
  projectDescriptionSection.innerHTML = '';
  let projectDescription = document.createElement('p')
  projectDescription.innerHTML = currentProject.projectDescription;
  projectDescriptionSection.appendChild(projectDescription);

  if (document.querySelector('.currentProject') != null) {
    let currentProject = document.getElementsByClassName('currentProject')[0];
    currentProject.classList.remove('currentProject');
  }

  let projectSBID = key;
  let projectSBLink = document.getElementById(projectSBID);
  projectSBLink.classList.add("currentProject");
};

const setSelectProjectListener = () => {
  document.querySelectorAll('.selectProject-button').forEach(element => {
    element.addEventListener('click', event =>{
      let key = event.target.closest('button').id;
      selectProject(key);
    })
  })
};

export { selectProject, setSelectProjectListener };