const messageReducer = (state = [], action) => {
  console.log('in messageReducer', action.payload)
  switch (action.type) {
    case "SET_NEW_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};

export default messageReducer;
