const selectedTemplateReducer = (state = {}, action) => { 
    switch (action.type) {
        case 'SET_SELECTED_TEMPLATE':
          return action.payload;
        default:
          return state;
      };
    };   
    

    export default selectedTemplateReducer;
    