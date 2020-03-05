import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/book';
import CategoryFilter from './filter';
import { bookstoreCms, booksCms } from '../style';

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
      <div key={book.title} className="row">
        <Book
          book={book}
          removeBook={removeBook}
        />
      </div>
    ));
    return (
      <div className="container">
        <div className="row">
          <ul className="col px-5">
            <li style={bookstoreCms}>Bookstore CMS</li>
            <li style={booksCms}>BOOKS</li>
            <li><CategoryFilter handleChange={this.handleChange} /></li>
          </ul>
        </div>
        {list}
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
