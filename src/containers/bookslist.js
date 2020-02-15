import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';

const Bookslist = props => {
  const { books, removeBook, filter } = props;
  const filtered = filter === 'All' ? books : books.filter(book => book.category === filter);
  const list = filtered.map(book => <Book key={book.title} book={book} removeBook={removeBook} />);

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
  filter: PropTypes.string.isRequired,
};

export default Bookslist;
