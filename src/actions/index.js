const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBookAction = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBookAction = book => ({
  type: REMOVE_BOOK,
  book,
});

export { createBookAction, removeBookAction };
