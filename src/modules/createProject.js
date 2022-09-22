import { storeProject } from './storeProjectLS.js';

const projectKey = (i => () => i++)(0);

const createProject = (project) => {

  let key = projectKey();
  let storageKeyName = 'project' + key;

  project.storageKeyName = storageKeyName;
  project.key = key;
  storeProject(project, key);
};

export { createProject };