import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './showTodoModal';
import { setAddProjectListener } from './showProjectModal';
import { setSubmitListener } from './storeTodoDetails';
import { setProjectSubmitListener } from './collectProjectData';
import { deleteProjectListener } from './deleteProject'
import { editProjectListener } from './editProject'
import { loadImages } from './loadImages';

loadImages();
setTodoListener();
setAddProjectListener();
setSubmitListener();
setProjectSubmitListener();
deleteProjectListener();
editProjectListener();