import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './modules/showTodoModal';
import { setAddProjectListener } from './modules/showProjectModal';
import { setToDoSubmitListener } from './modules/collectToDoData';
import { setProjectSubmitListener } from './modules/collectProjectData';
import { deleteProjectListener } from './modules/deleteProject'
import { setEditProjectListener } from './modules/editProjectModal'
import { setEditProjectSubmitListener } from './modules/editProject'
import { loadImages } from './modules/loadImages';
import { load } from './modules/load';

loadImages();

setTodoListener();

//Manipulate projects
setAddProjectListener();
setToDoSubmitListener();
setProjectSubmitListener();
deleteProjectListener();
setEditProjectListener();
setEditProjectSubmitListener();
load();