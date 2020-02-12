const CREATE_BOOK = 'CREATE_BOOK'; //eslint-disable-line
const REMOVE_BOOK = 'REMOVE_BOOK';

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const index = state.findIndex(action.book);
      return state.slice(0, index).concat(state.slice(index + 1, state.length));
    }
    default:
      return state;
  }
};

export default BookReducer;
