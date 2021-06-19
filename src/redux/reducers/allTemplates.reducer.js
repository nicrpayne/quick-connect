const allTemplatesReducer = (state = [], action) => {
  // console.log('in SET_TEMPLATES!!!!', action.payload)  
  switch (action.type) {
      case 'SET_TEMPLATES':
        return action.payload;
      default:
        return state;
    };
  };   
  
  // template will be on the redux state at:
  // state.template
  export default allTemplatesReducer;
  