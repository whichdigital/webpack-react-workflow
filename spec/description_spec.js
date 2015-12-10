import 'core-js/es5';
/*eslint-disable */
import React from 'react';
/*eslint-enable */
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Description from '../src/book/description.jsx';

describe('Description', function() {
  it('is a React element', function() {
    let validation = TestUtils.isElement(
      <Description />
    );

    expect(validation).to.be.ok;
  });

  it('is a Description React element', function() {
    let validation = TestUtils.isElementOfType(
      <Description />,
      Description
    );

    expect(validation).to.be.ok;
  });

  it('is not a DOM component', function() {
    let component = TestUtils.renderIntoDocument(<Description />);
    let validation = TestUtils.isDOMComponent(component);

    expect(validation).to.not.be.ok;
  });

  it('is a composite component', function() {
    let component = TestUtils.renderIntoDocument(<Description />);
    let validation = TestUtils.isCompositeComponent(component);

    expect(validation).to.be.ok;
  });

  it('is a composite Description component', function() {
    let component = TestUtils.renderIntoDocument(<Description />);
    let validation = TestUtils.isCompositeComponentWithType(component, Description);

    expect(validation).to.be.ok;
  });

  it('renders a <p> tag', function() {
    let component = TestUtils.renderIntoDocument(<Description />);
    let descriptionElement = ReactDOM.findDOMNode( component );

    expect( descriptionElement.tagName ).to.equal( 'P' );
  });
});
