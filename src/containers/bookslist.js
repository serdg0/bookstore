import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';

const Bookslist = props => {
  const { books, removeBook } = props;
  const list = books.map(book => <Book key={book.title} book={book} removeBook={removeBook} />);
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {list}
    </table>
  );
};

Bookslist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType([])).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Bookslist;
