export function getUpdatedList(state, newDate) {
  if (state) {
    return state.filter(item => {
      if (item.id !== newDate.id) {
        return item;
      }
    });
  }
}
