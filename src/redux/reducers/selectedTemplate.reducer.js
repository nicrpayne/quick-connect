const selectedTemplateReducer = (state = {}, action) => {
    // console.log('in SET_TEMPLATES Reducer! Action.payload:', action.payload)  
    switch (action.type) {
        case 'SET_SELECTED_TEMPLATE':
          return action.payload;
        default:
          return state;
      };
    };   
    
    // template will be on the redux state at:
    // store.selectedTemplateReducer.?
    export default selectedTemplateReducer;
    