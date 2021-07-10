const allHotelsReducer = (state = [], action) => {
    console.log('in SET_ALL_HOTELS Reducer!', action, state)  
    switch (action.type) {
        case 'SET_ALL_HOTELS':
          return action.payload;
        // case 'SET_HOTEL_RESPONSE':
        //   return action.payload;
        default:
          return state;
      };
    };   
    
    export default allHotelsReducer;
    