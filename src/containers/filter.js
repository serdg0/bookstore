import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target: { value } } = event;
    this.setState({
      category: value,
    });
  }

  handleSubmit() {
    const { filter } = this.props;
    const { category } = this.state;
    filter(category);
  }

  render() {
    const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
    return (
      <div>
        <select onChange={this.handleChange}>
          {categoriesBox}
        </select>
        <button type="button" onClick={this.handleSubmit}>Filter!</button>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
