import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './components/App';
import BookReducer from './reducers/book';

const initialState = [
  {
    title: 'Foundation',
    category: 'Sci-Fi',
    id: () => (Math.random() * 100).toFixed(),
  },
  {
    title: 'Foundation II',
    category: 'Sci-Fi',
    id: () => (Math.random() * 100).toFixed(),
  },
  {
    title: 'Foundation III',
    category: 'Sci-Fi',
    id: () => (Math.random() * 100).toFixed(),
  },
  {
    title: 'The Tin Drum',
    category: 'History',
    id: () => (Math.random() * 100).toFixed(),
  },
];

const mapStateToProps = state => ({
  books: state,
});

const store = createStore(BookReducer, initialState);
const Container = connect(mapStateToProps, null)(App);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
