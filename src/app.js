import './core/core.scss';
import './navigation/links.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book/book.js';

import Section from './book/section.jsx';
ReactDOM.render( <Section />, document.getElementById( 'heading-container' ) );

var book = new Book();
book.logSomething();
