import { addToDom } from './addProjecttoDOM.js'

let projectArray = [];

const storeProject = (project, key) => {

  projectArray.push(project);

  const projectArrayJSON = JSON.stringify(projectArray, null, 2);
  localStorage.setItem("projectList", projectArrayJSON);
  addToDom(key);
};

export { storeProject };