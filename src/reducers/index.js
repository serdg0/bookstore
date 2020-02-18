import { combineReducers } from 'redux';
import BookReducer from './book';
import FilterReducer from './filter';

const rootReducer = combineReducers({
  books: BookReducer,
  filter: FilterReducer,
});

export default rootReducer;
