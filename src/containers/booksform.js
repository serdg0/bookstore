import React from 'react';

const initialState = {
  title: '',
  category: 'Action',
  id: () => (Math.random() * 100).toFixed(),
}

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
      [name]: value
    })
  }

  handleSubmit(state) {
    this.props.createBookAction(state);
    this.setState(initialState);
  }

  render(){
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
    return (
      <form>
        <input name="title" onChange={this.handleChange} type="text" />
        <select name="category" onChange={this.handleChange}>{categoriesBox}</select>
        <button onClick={() => this.handleSubmit(this.state)} type="button">Submit</button>
      </form>
    );
  }
};

export default BooksForm;
