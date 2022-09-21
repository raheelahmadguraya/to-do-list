const loadProject = (projectKey) => {
  let projectFromLS = JSON.parse(localStorage.getItem(projectKey));
  return projectFromLS;
};


const selectProject = (project) => {
  let projectKey = project.storageKeyName;
  let projectFromLS = loadProject(projectKey);

  let projectMainTitle = document.getElementsByClassName('project-title')[0];
  projectMainTitle.innerHTML = '<h2>' + projectFromLS.projectTitle + '</h2>';


  let projectDueDate = document.getElementsByClassName('project-dueDate')[0];
  projectDueDate.innerHTML = '<h5>' + 'Project Due Date:' + ' ' + projectFromLS.projectDueDate + '</h5>';

  let projectDescriptionSection = document.getElementsByClassName('project-details')[0];
  projectDescriptionSection.innerHTML = '';
  let projectDescription = document.createElement('p')
  projectDescription.innerHTML = projectFromLS.projectDescription;
  projectDescriptionSection.appendChild(projectDescription);

  if (document.querySelector('.currentProject') != null) {
    let currentProject = document.getElementsByClassName('currentProject')[0];
    currentProject.classList.remove('currentProject');
  }

  let projectSBTitle = projectFromLS.projectTitle.replace(/\s/g, '-');
  let projectSBLink = document.getElementsByClassName(projectSBTitle)[0];
  projectSBLink.classList.add("currentProject");
};

const setSelectProjectListener = () => {
  document.querySelectorAll('.selectProject-button').forEach(element => {
    element.addEventListener('click', event =>{
      let projectKey = event.target.closest('button').id;
      let projectFromLS = loadProject(projectKey);
      selectProject(projectFromLS);
    })
  })
};

export { selectProject, setSelectProjectListener };