import { storeProject } from "./storeProjectLS";

const toDoKey = (i => () => i++)(0);

const createCheckList = () => {
  let checkList = [];
  return checkList;
}

const storeToDo = (toDo) => {
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  let currentProject = document.getElementsByClassName('currentProject')[0];
  let index = projectList.findIndex(x => x.key === (currentProject.id).toString());
  
  let updatedProject = projectList[index];
  toDo.projectIndex = index;
  toDo.key = toDoKey().toString();
  if (Object.hasOwn(updatedProject, 'checkList') == false) {
    let projectCheckList = createCheckList();
    projectCheckList.push(toDo);
    updatedProject.checkList = projectCheckList;
  } else {
    (updatedProject.checkList).push(toDo);
  }
  projectList.splice(index, 1);
  currentProject.remove();
  const projectArrayJSON = JSON.stringify(projectList, null, 2);
  localStorage.setItem("projectList", projectArrayJSON);
  storeProject(updatedProject);
};

export { storeToDo };