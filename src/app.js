import './core/core.scss';
import './navigation/links.scss';

import React from 'react';
import Book from './book/book.js';

import Heading from './book/heading.jsx'; // eslint-disable-line no-unused-vars
React.render( <Heading />, document.getElementById( 'heading-container' ) );

var book = new Book();
book.logSomething();
