import './core/core.scss';
import './navigation/links.scss';

import React from 'react';
import Book from './book/book.js';

import Section from './book/section.jsx';
React.render( <Section />, document.getElementById( 'heading-container' ) );

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './flux/reducers';
import Todos from './todos/App.jsx'; // eslint-disable-line no-unused-vars

let store = createStore(todoApp);

let rootElement = document.getElementById('notes-container');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <Todos />}
  </Provider>,
  rootElement
);

var book = new Book();
book.logSomething();
