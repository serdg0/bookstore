import React from 'react';
import PropTypes from 'prop-types';
import {
  panelStyle, bookTitle, categoryStyle, removeButton,
} from '../style';

const Book = props => {
  const { book, removeBook } = props;
  const button = <button style={removeButton} type="button" onClick={() => removeBook(book)}>Remove</button>;
  return (
    <div className="book col" style={panelStyle}>
      <div style={categoryStyle}>{book.category}</div>
      <div style={bookTitle}>{book.title}</div>
      <div>{button}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
