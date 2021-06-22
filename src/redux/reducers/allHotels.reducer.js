const allHotelsReducer = (state = [], action) => {
    // console.log('in SET_ALL_HOTELS Reducer! Action.payload:', action.payload)  
    switch (action.type) {
        case 'SET_ALL_HOTELS':
          return action.payload;
        default:
          return state;
      };
    };   
    
    // template will be on the redux state at:
    // store.selectedTemplateReducer.?
    export default allHotelsReducer;
    