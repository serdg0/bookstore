import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  const button = <button>Remove</button>
  console.log('newbbok: ', book)
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
