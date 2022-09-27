import './styles/main.css'
import 'normalize.css';

import { Controller } from './modules/controller';
import { Model } from './modules/model'
import { View } from './modules/view'
import { load } from './modules/load'

load();
const app = new Controller(new Model(), new View())