import { combineReducers } from 'redux';
import cars from './CarsReducer';
import fillters from './FiltersReducer';

const rootReducer = combineReducers({
  cars,
  fillters,
});

export default rootReducer;
