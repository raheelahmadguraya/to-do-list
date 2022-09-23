
const load = () => {

  let projectArray = [];

  const projectArrayJSON = JSON.stringify(projectArray, null, 2);
  localStorage.setItem("projectList", projectArrayJSON);

};

export { load };