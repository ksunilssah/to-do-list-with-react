import { STATUS_CHANGED } from '../../../constants';

export function changeStatus(newStatus) {
  return {
    type: STATUS_CHANGED,
    payload: newStatus
  };
}
