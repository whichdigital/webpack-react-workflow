var React = require( 'react' );
var Book = require( './book/book.js' );

import Heading from './book/heading.jsx';
React.render( <Heading />, document.querySelector( 'body' ) );

var book = new Book();
book.logSomething();
