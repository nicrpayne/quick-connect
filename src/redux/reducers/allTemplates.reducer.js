const allTemplatesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_TEMPLATES':
        return action.payload;
      default:
        return state;
    };
  };   
  
  export default allTemplatesReducer;
  