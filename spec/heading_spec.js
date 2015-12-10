import 'core-js/es5';
/*eslint-disable */
import React from 'react';
/*eslint-enable */
import TestUtils from 'react-addons-test-utils';
import Heading from '../src/book/heading.jsx';

describe('Heading', function() {
  it('is a React element', function() {
    let validation = TestUtils.isElement(
      <Heading />
    );

    expect(validation).to.be.ok;
  });

  it('is a Heading React element', function() {
    let validation = TestUtils.isElementOfType(
      <Heading />,
      Heading
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = TestUtils.renderIntoDocument(<Heading />);

    it('is not a DOM component', function() {
      let validation = TestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = TestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite Heading component', function() {
      let validation = TestUtils.isCompositeComponentWithType(component, Heading);

      expect(validation).to.be.ok;
    });
  });

  describe('tested with shallow rendering technique', function() {
    let headingComponent;

    before( function() {
      let shallowRenderer = TestUtils.createRenderer();

      shallowRenderer.render( <Heading/> );
      headingComponent = shallowRenderer.getRenderOutput();
    });

    it('renders <h1> root element', function() {
      expect( headingComponent.type ).to.equal( 'h1' );
    });

    it('has class set to blue', function() {
      expect( headingComponent.props.className ).to.equal( 'blue' );
    });
  });
});
