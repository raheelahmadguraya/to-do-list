import './styles/main.css'
import 'normalize.css';

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