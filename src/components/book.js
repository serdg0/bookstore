import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;
  const button = <button onClick={() => removeBook(book)}>Remove</button>;
  return (
    <tr>
      <th>{book.id()}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
      <th>{button}</th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
