import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './showTodoModal';
import { setProjectListener } from './showProjectModal';
import { setSubmitListener } from './storeTodoDetails';
import { setProjectSubmitListener } from './storeProjectDetails';
import {loadImages} from './loadImages';

loadImages();
setTodoListener();
setProjectListener();
setSubmitListener();
setProjectSubmitListener();