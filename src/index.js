import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './modules/showTodoModal';
import { setAddProjectListener } from './modules/showProjectModal';
import { setSubmitListener } from './modules/storeTodoDetails';
import { setProjectSubmitListener } from './modules/collectProjectData';
import { deleteProjectListener } from './modules/deleteProject'
import { editProjectListener } from './modules/editProject'
import { loadImages } from './modules/loadImages';

loadImages();
setTodoListener();
setAddProjectListener();
setSubmitListener();
setProjectSubmitListener();
deleteProjectListener();
editProjectListener();