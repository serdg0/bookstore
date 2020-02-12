import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const Bookslist = props => {
  const { books } = props;
  const list = books.map(book => <Book key={book.title} book={book} />);
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
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Bookslist;
