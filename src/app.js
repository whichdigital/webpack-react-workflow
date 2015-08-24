import React from 'react';
import Book from './book/book.jsx';
import Label from './book/label.js'

var label = new Label();
label.logSomething();

React.render( <Book />, document.querySelector( 'body' ) );
