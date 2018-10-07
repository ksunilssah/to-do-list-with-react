import { ADD_TASK } from '../../../constants';

export function AddNewTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask
  };
}
