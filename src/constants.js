export const SHOW_TASK_FORM = 'SHOW_TASK_FORM';
export const ADD_TASK = 'ADD_TASK';
export const STATUS_CHANGED = 'STATUS_CHANGED';
export const initialState = {
  taskList: [
    {
      title: 'Learn webpack',
      description: 'Spend at least 10 hours on webpack learning',
      status: 'completed',
      id: 1
    },
    {
      title: 'Learn React',
      description: 'spend at least 8 hours on React learning',
      status: 'inProgress',
      id: 2
    },
    {
      title: 'Learn React with Redux',
      description: 'Spend at least 12 hours on React-Redux learning',
      status: 'notStarted',
      id: 3
    }
  ]
};
