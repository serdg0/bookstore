const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBookAction = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBookAction = book => ({
  type: REMOVE_BOOK,
  book,
});

const changeFilterAction = category => ({
  type: CHANGE_FILTER,
  category,
});


export { createBookAction, removeBookAction, changeFilterAction };
