import { combineReducers } from 'redux';
import newTask from './components/organisms/AddTask/AddTaskReducer';

const rootReducer = combineReducers({
  taskList: newTask
});

export default rootReducer;
