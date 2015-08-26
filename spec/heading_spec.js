import 'core-js/es5';
import React from 'react/addons';
import Heading from '../src/book/heading.jsx';

var ReactTestUtils = React.addons.TestUtils;

describe('Heading', function() {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <Heading />
    );

    expect(validation).to.be.ok;
  });

  it('is a Heading React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <Heading />,
      Heading
    );

    expect(validation).to.be.ok;
  });

  describe('rendered into DOM', function() {
    let component = ReactTestUtils.renderIntoDocument(<Heading />);

    it('is not a DOM component', function() {
      let validation = ReactTestUtils.isDOMComponent(component);

      expect(validation).to.not.be.ok;
    });

    it('is a composite component', function() {
      let validation = ReactTestUtils.isCompositeComponent(component);

      expect(validation).to.be.ok;
    });

    it('is a composite Heading component', function() {
      let validation = ReactTestUtils.isCompositeComponentWithType(component, Heading);

      expect(validation).to.be.ok;
    });
  });

  describe('tested with shallow rendering technique', function() {
    let headingComponent;

    before( function() {
      let shallowRenderer = ReactTestUtils.createRenderer();

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
