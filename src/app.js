import './app.css';

import React from 'react';
import Book from './book/book.js';

import Heading from './book/heading.jsx';
React.render( <Heading />, document.getElementById( 'heading-container' ) );

var book = new Book();
book.logSomething();
