var initialState = {};

export function contacts (state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type){
    case 'ADD_CONTACT':
      return Object.assign(
        {},
        state,
        {[action.id]: action.data}
      );

    default:
      return state;
  }
  return state;
}
export default contacts;
