import notepad from '../assets/notepad.png'
import daisy from '../assets/daisy.png'
import project from '../assets/note-book.png'
import check from '../assets/uncompletedTask.png'
import pencil from '../assets/pencil.png'
import deleteItem from '../assets/bin.png'
import addTask from '../assets/plus.png'
import editProject from '../assets/edit-notepad.png'
import deleteProject from '../assets/project-delete.png'

const loadImages = () => {

const appLogo = document.getElementById('appLogo');
appLogo.src = notepad;

const addProject = document.getElementById('addProject');
addProject.src = project;

const taskCompletionBtn = document.querySelectorAll(".completeTask");
taskCompletionBtn.forEach((buttonImage) => {
  buttonImage.src = check;
});

const taskEditBtn = document.querySelectorAll(".editTask");
taskEditBtn.forEach((buttonImage) => {
  buttonImage.src = pencil;
});

const taskDeleteBtn = document.querySelectorAll(".deleteTask");
taskDeleteBtn.forEach((buttonImage) => {
  buttonImage.src = deleteItem;
});

const addCheckListItem = document.getElementById('addItem');
addCheckListItem.src = addTask;

const footerLogo = document.getElementById('footerLogo');
footerLogo.src = daisy;

const editProj = document.getElementById('editProject');
editProj.src = editProject;

const deleteProj = document.getElementById('deleteProject');
deleteProj.src = deleteProject;

};

export { loadImages }