import React from 'react';
import PropTypes from 'prop-types';
import {
  addBookSt, inputForm, selectForm, addBkBtn, blueRectangle, flexForm,
} from '../style';

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
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(state) {
    const { createBookAction } = this.props;
    const { title } = this.state;
    if (title === '') { return false; }
    createBookAction(state);
    return this.setState(initialState);
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
    const { title } = this.state;
    return (
      <div className="container">
        <div className="row">
          <form className="col mx-5">
            <h1 style={addBookSt}>ADD NEW BOOK</h1>
            <div style={flexForm}>
              <input placeholder="BOOK TITLE" style={inputForm} value={title} name="title" onChange={this.handleChange} type="text" />
              <select style={selectForm} name="category" onChange={this.handleChange}>
                <option value="" disabled selected>CATEGORY</option>
                {categoriesBox}
              </select>
              <div style={blueRectangle}>
                <button style={addBkBtn} onClick={() => this.handleSubmit(this.state)} type="button">ADD BOOK</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};
export default BooksForm;
