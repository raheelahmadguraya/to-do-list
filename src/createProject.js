import { addToDom } from './addProjecttoDOM.js'

const projectKey = (i => () => i++)(0);

const createProject = (project) => {

  let key = projectKey();
  let storageKeyName = 'project' + key;

  project.storageKeyName = storageKeyName;

  const result = JSON.stringify(project, null, 2);
  localStorage.setItem(storageKeyName, result);
  addToDom(project);
};

export { createProject };