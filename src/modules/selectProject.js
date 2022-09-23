import { setMarkTaskCompleteListener } from "./markTaskComplete";

const selectProject = (index) => {
  let projectList = JSON.parse(localStorage.getItem("projectList"));
  console.log(index);
  let currentProject = projectList[index];

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

  let projectSBLink = document.getElementById((currentProject.key).toString());
  projectSBLink.classList.add("currentProject");

  if (Object.hasOwn(currentProject, 'checkList') == false) {
    let toDoListSection = document.getElementsByClassName("todo-list")[0];
    toDoListSection.innerHTML = '';
  }

  if (Object.hasOwn(currentProject, 'checkList') == true) {
    let toDoListSection = document.getElementsByClassName("todo-list")[0];
    toDoListSection.innerHTML = '';
    for (const [index, toDo] of (currentProject.checkList).entries()){
      let toDoTask = document.createElement('div');
        toDoTask.classList.add("todo");
        let toDoPriority = document.createElement('div');
          toDoPriority.classList.add("todo-priority");
          toDoPriority.classList.add(toDo.priority);
        let toDoTitle = document.createElement('div');
          toDoTitle.classList.add("todo-title");
          toDoTitle.innerHTML = '<h4>' + toDo.title + '</h4>'
        let toDoDueDate = document.createElement('div');
          toDoDueDate.classList.add("todo-dueDate");
          toDoDueDate.innerHTML = '<p>' + 'Due:' + toDo.dueDate + '</p>'
        const toDoFunctions = document.getElementsByClassName("todo-functions")[0];
        const toDoFunctionsClone = toDoFunctions.cloneNode(true);
        
        toDoTask.appendChild(toDoPriority);
        toDoTask.appendChild(toDoTitle);
        toDoTask.appendChild(toDoDueDate);
        toDoTask.appendChild(toDoFunctionsClone);
        toDoListSection.appendChild(toDoTask);

        setMarkTaskCompleteListener(index);
    }
  }
};

const setSelectProjectListener = () => {
  document.querySelectorAll('.currentProject').forEach(element => {
    element.addEventListener('click', event =>{
      console.log('click');
      let key = event.target.closest('button').id;
      let projectList = JSON.parse(localStorage.getItem("projectList"));
      let index = projectList.findIndex(x => x.key === key.toString())
      selectProject(index);
    })
  })
};

export { selectProject, setSelectProjectListener };