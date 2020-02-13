import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      id: () => (Math.random() * 100).toFixed(),
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const { target: { value }, target: { name } } = event;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit() {
    this.props.submitBook(this.state);
  }

  render(){
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categoriesBox = categories.map(cg => <option key={cg}>{cg}</option>);
    return (
      <form>
        <input name="title" onChange={this.handleChange} type="text" />
        <select name="category" onChange={this.handleChange}>{categoriesBox}</select>
        <button onClick={this.handleSubmit} type="submit">Submit</button>
      </form>
    );
  }
};

export default BooksForm;
