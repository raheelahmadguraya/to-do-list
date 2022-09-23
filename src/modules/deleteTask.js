
const deleteTaskListener = (index) => {
  let deleteTaskBtn = document.getElementsByClassName('deleteTask-button')[index];
  deleteTaskBtn.addEventListener('click', event =>{
    let taskToBeDeleted = deleteTaskBtn.closest('.todo');
    let projectList = JSON.parse(localStorage.getItem("projectList"));
    let currentProject = document.getElementsByClassName("currentProject")[0];
    let currentProjectIndex = projectList.findIndex(x => x.key === (currentProject.id).toString())
    let checkList = projectList[currentProjectIndex].checkList;
    let taskIndex = checkList.findIndex(x => x.key === (taskToBeDeleted.id).toString())
    checkList.splice(taskIndex, 1);
    projectList[currentProjectIndex].checkList = checkList;
    taskToBeDeleted.remove();
    const projectArrayJSON = JSON.stringify(projectList, null, 2);
    localStorage.setItem("projectList", projectArrayJSON);
  });
};

export { deleteTaskListener };