const allHotelsReducer = (state = [], action) => { 
    switch (action.type) {
        case 'SET_ALL_HOTELS':
          return action.payload;
        default:
          return state;
      };
    };   
    
    export default allHotelsReducer;
    