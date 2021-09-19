const initialState = {
  items: [],
  isLoaded: false, 
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
      case 'SET_LOADED':
        return {
          ...state,
          isLoaded: true,
        };
    default:
      return state;
  }
};

export default cars;