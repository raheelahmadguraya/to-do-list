import './styles/main.css'
import 'normalize.css';
import notepad from './assets/notepad.png'
import daisy from './assets/daisy.png'
import project from './assets/note-book.png'
import check from './assets/checkmark.png'

const appLogo = document.getElementById('appLogo');
appLogo.src = notepad;

const addProject = document.getElementById('addProject');
addProject.src = project;

const markComplete = document.getElementById('check');
markComplete.src = check;

const footerLogo = document.getElementById('footerLogo');
footerLogo.src = daisy;
