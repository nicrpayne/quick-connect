const allGuestsReducer = (state = [], action) => {
    // console.log('in SET_ALL_GUESTS Reducer! Action.payload:', action.payload)  
    switch (action.type) {
        case 'SET_ALL_GUESTS':
          return action.payload;
        default:
          return state;
      };
    };   
    
    // template will be on the redux state at:
    // store.selectedTemplateReducer.?
    export default allGuestsReducer;
    