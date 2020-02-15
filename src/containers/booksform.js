import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  title: '',
  category: 'Action',
  id: () => (Math.random() * 100).toFixed(),
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target: { value }, target: { name } } = event;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(state) {
    const { createBookAction } = this.props;
    createBookAction(state);
    this.setState(initialState);
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
    const { title, category } = this.state;
    return (
      <form>
        <input value={title} name="title" onChange={this.handleChange} type="text" />
        <select value={category} name="category" onChange={this.handleChange}>{categoriesBox}</select>
        <button onClick={() => this.handleSubmit(this.state)} type="button">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};
export default BooksForm;
