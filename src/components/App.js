import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../containers/bookslist';
import BooksForm from '../containers/booksform';
import '../App.css';


const App = props => {
  const { books: { books } } = props;
  return (
    <div>
      <BooksList books={books} />
      <BooksForm />
    </div>
  );
};

App.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default App;
