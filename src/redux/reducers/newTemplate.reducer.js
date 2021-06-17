const newTemplatesReducer = (state = {}, action) => {
    // console.log('in NEW_TEMP_REDUCER', action.payload)  
    switch (action.type) {
        case 'NEW_TEMP_REDUCER':
          return action.payload;
        default:
          return state;
      };
    };   
    
    // template will be on the redux state at:
    // state.template
    export default newTemplatesReducer;