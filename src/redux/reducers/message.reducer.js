const messageReducer = (state = [], action) => {
  switch (action.type) {

    case 'MESSAGE_SUCCESS':
      return action.payload;
      
    default:
      return state;
      
  }
};

export default messageReducer;
