require('core-js/es5');
var expect = require('chai').expect;
var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;

import Heading from '../src/book/heading.jsx';

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

  it('is not a DOM component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Heading />);
    let validation = ReactTestUtils.isDOMComponent(component);

    expect(validation).to.not.be.ok;
  });

  it('is a composite component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Heading />);
    let validation = ReactTestUtils.isCompositeComponent(component);

    expect(validation).to.be.ok;
  });

  it('is a composite Heading component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Heading />);
    let validation = ReactTestUtils.isCompositeComponentWithType(component, Heading);

    expect(validation).to.be.ok;
  });
});
