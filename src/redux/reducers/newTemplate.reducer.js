const newTemplateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'TEST_REDUCER':
        return action.payload;
      default:
        return state;
    }
  };   console.log('in reducer bro!');
  
  // template will be on the redux state at:
  // state.template
  export default newTemplateReducer;
  