import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';
import CategoryFilter from './filter';

class Bookslist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { value } } = event;
    const { filterFun } = this.props;
    filterFun(value);
  }

  render() {
    const { books, removeBook, filter } = this.props;
    const filtered = filter === 'All' ? books : books.filter(book => book.category === filter);
    const list = filtered.map(book => (
      <Book
        key={book.title}
        book={book}
        removeBook={removeBook}
      />
    ));
    return (
      <div>
        <CategoryFilter handleChange={this.handleChange} />
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {list}
        </table>
      </div>
    );
  }
}

Bookslist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType([])).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterFun: PropTypes.func.isRequired,
};

export default Bookslist;
