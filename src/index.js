import './styles/main.css'
import 'normalize.css';
import notepad from './assets/notepad.png'
import daisy from './assets/daisy.png'
import project from './assets/note-book.png'
import check from './assets/success.png'
import pencil from './assets/pencil.png'
import deleteItem from './assets/bin.png'
import addTask from './assets/plus.png'

const appLogo = document.getElementById('appLogo');
appLogo.src = notepad;

const addProject = document.getElementById('addProject');
addProject.src = project;

const markComplete = document.getElementById('check');
markComplete.src = check;

const edit = document.getElementById('editItem');
edit.src = pencil;

const deleteTask = document.getElementById('deleteItem');
deleteTask.src = deleteItem;

const addCheckListItem = document.getElementById('addItem');
addCheckListItem.src = addTask;

const footerLogo = document.getElementById('footerLogo');
footerLogo.src = daisy;
