const allHotelsReducer = (state = [], action) => {
    console.log('in SET_ALL_HOTELS Reducer!', action, state)  
    switch (action.type) {
        case 'SET_ALL_HOTELS':
          return action.payload;
        case 'SET_HOTEL_RESPONSE':
          return action.payload;
        case 'SET_LOADING_FALSE':
          return {
            loading: false
          };
          case 'SET_LOADING_TRUE':
          return {
            loading: true
          };
        default:
          return state;
      };
    };   
    
    export default allHotelsReducer;
    