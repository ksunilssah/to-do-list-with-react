import { ADD_TASK, initialState, STATUS_CHANGED } from '../../../constants';
import { getUpdatedList } from '../../../utilities';
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case STATUS_CHANGED:
      let newList = getUpdatedList(state, action.payload);
      return [...newList, action.payload];
    default:
      return state;
  }
};
