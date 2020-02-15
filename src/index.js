import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers/index';
import { createBookAction, removeBookAction, changeFilterAction } from './actions/index';

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
  books: state.books,
  filter: state.filter,
});

const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[0],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[1],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[2],
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: initialState[3],
});

const Container = connect(mapStateToProps, {
  createBookAction,
  removeBookAction,
  changeFilterAction,
})(App);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
