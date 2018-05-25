const selectedChannelReducer = (state = null, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SELECTED_CHANNEL': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default selectedChannelReducer;
