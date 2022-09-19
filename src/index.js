import './styles/main.css'
import 'normalize.css';
import { setTodoListener } from './showTodoModal';
import { setProjectListener } from './showProjectModal';
import {loadImages} from './loadImages';

loadImages();
setTodoListener();
setProjectListener();