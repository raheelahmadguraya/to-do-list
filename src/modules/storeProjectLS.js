import { addToDom } from './addProjecttoDOM.js'


const projectKey = (i => () => i++)(0);

const storeProject = (project) => {

  project.key = projectKey().toString();

  let projectArray = JSON.parse(localStorage.getItem('projectList'));
  projectArray.push(project);

  const projectArrayJSON = JSON.stringify(projectArray, null, 2);
  localStorage.setItem("projectList", projectArrayJSON);
  addToDom(project.key);
};

export { storeProject };