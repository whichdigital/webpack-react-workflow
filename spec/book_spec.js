import 'core-js/es5';
import React from 'react/addons';
import Book from '../src/book/book.jsx'
import Heading from '../src/book/heading.jsx'
import Description from '../src/book/description.jsx'

describe('Book', function() {
  let bookComponent;

  before( function() {
    let ReactTestUtils = React.addons.TestUtils,
      shallowRenderer = ReactTestUtils.createRenderer();

    shallowRenderer.render( <Book/> );
    bookComponent = shallowRenderer.getRenderOutput();
  });

  it('is wrapped in div element', function() {
    expect( bookComponent.type ).to.equal( 'div' );
  });

  describe('checks if children exist regardless of their order', function() {
    let children;

    before( function() {
      children = bookComponent.props.children;
    });

    it('includes Heading component', function() {
      let childHeading = children.filter(
        component => component.type === Heading
      );
      expect( childHeading.length ).to.be.ok;
    });

    it('includes Description component', function() {
      let childDescription = children.filter(
        component => component.type === Description
      );
      expect( childDescription.length ).to.be.ok;
    });
  });

  // An alternative to the two tests above
  it('includes Heading and Description components in particular order',
      function() {
    expect( bookComponent.props.children ).to.eql( [
      <Heading />,
      <Description />
    ] );
  });
});
