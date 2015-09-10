import './core/core.scss';
import './navigation/links.scss';

import React from 'react';
import Book from './book/book.js';

import Section from './book/section.jsx'; // eslint-disable-line no-unused-vars
React.render( <Section />, document.getElementById( 'heading-container' ) );

import PersistentBrowserStore from './core/PersistentBrowserStore';
import persist from './flux/libs/persist';

persist( PersistentBrowserStore );

import Todos from './todos/App.jsx'; // eslint-disable-line no-unused-vars
React.render( <Todos />, document.getElementById( 'notes-container' ) );

var book = new Book();
book.logSomething();
