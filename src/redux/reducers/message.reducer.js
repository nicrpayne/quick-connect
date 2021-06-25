const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return action.payload;
    default:
      return state;
      
  }
};

export default messageReducer;
