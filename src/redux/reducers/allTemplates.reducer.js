const allTemplatesReducer = (state = {}, action) => {
//   console.log('in DISPLAY_TEMPLATES', action.payload)  
  switch (action.type) {
      case 'DISPLAY_TEMPLATES':
        return action.payload;
      default:
        return state;
    };
  };   
  
  // template will be on the redux state at:
  // state.template
  export default allTemplatesReducer;
  