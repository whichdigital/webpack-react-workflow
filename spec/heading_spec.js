require('core-js/es5');
var expect = require('chai').expect;
var React = require('react');

import Heading from '../src/book/heading.jsx';

describe('Heading', function() {
  it('outputs html', function() {
    var result = React.renderToString( <Heading /> );
    var expectation = 'h1';
    expect( result ).to.contain( expectation );
  });
});
