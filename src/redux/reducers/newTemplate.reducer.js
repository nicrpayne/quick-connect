const newTemplatesReducer = (state = {}, action) => { 
    switch (action.type) {
        case 'NEW_TEMP_REDUCER':
          return action.payload;
        default:
          return state;
      };
    };   

    export default newTemplatesReducer;