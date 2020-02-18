import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';
import '../App.css';


const App = props => {
  const {
    books, createBookAction, removeBookAction, changeFilterAction, filter,
  } = props;
  return (
    <div>
      <BooksList
        books={books}
        filter={filter}
        filterFun={changeFilterAction}
        removeBook={removeBookAction}
      />
      <BooksForm createBookAction={createBookAction} />
    </div>
  );
};

App.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  createBookAction: PropTypes.func.isRequired,
  removeBookAction: PropTypes.func.isRequired,
  changeFilterAction: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;
