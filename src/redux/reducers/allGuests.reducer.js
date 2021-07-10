const allGuestsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_GUESTS':
          return action.payload;
        default:
          return state;
      };
    };   
    
    export default allGuestsReducer;
    