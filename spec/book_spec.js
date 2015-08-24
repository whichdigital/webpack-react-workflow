import 'core-js/es5';
import React from 'react/addons';
import Book from '../src/book/book.jsx'

var ReactTestUtils = React.addons.TestUtils;

describe('Book', function() {
  xit('is true', function() {
    let renderer = ReactTestUtils.createRenderer();
    renderer.render( Book );
    let output = renderer.getRenderOutput();

    expect( output.type ).to.equal( 'div' );
  });

  it('is true', function() {
    expect( true ).to.equal( true );
  });
});
