import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';

const Bookslist = props => {
  const { books, removeBook } = props;
  console.log(props)
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
  books: PropTypes.array.isRequired,
};

export default Bookslist;
