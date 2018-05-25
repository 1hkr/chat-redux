const messagesReducer = (state = null, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'MESSAGE_POSTED': {
      console.log(state);
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case 'FETCH_MESSAGES': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default messagesReducer;
