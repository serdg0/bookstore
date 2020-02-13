import { combineReducers } from 'redux';
import BookReducer from './book';

const rootReducer = combineReducers({
  books: BookReducer,
});

export default rootReducer;
