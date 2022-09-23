import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './modules/showTodoModal';
import { setAddProjectListener } from './modules/showProjectModal';
import { setSubmitListener } from './modules/storeTodoDetails';
import { setProjectSubmitListener } from './modules/collectProjectData';
import { deleteProjectListener } from './modules/deleteProject'
import { setEditProjectListener } from './modules/editProjectModal'
import { setEditProjectSubmitListener } from './modules/editProject'
import { loadImages } from './modules/loadImages';
import { load } from './modules/load';

loadImages();

setTodoListener();
setSubmitListener();

//Manipulate projects
setAddProjectListener();
setProjectSubmitListener();
deleteProjectListener();
setEditProjectListener();
setEditProjectSubmitListener();
load();