import 'core-js/es5';
import React from 'react/addons';
import Description from '../src/book/description.jsx';

var ReactTestUtils = React.addons.TestUtils;

describe('Description', function() {
  it('is a React element', function() {
    let validation = ReactTestUtils.isElement(
      <Description />
    );

    expect(validation).to.be.ok;
  });

  it('is a Description React element', function() {
    let validation = ReactTestUtils.isElementOfType(
      <Description />,
      Description
    );

    expect(validation).to.be.ok;
  });

  it('is not a DOM component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Description />);
    let validation = ReactTestUtils.isDOMComponent(component);

    expect(validation).to.not.be.ok;
  });

  it('is a composite component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Description />);
    let validation = ReactTestUtils.isCompositeComponent(component);

    expect(validation).to.be.ok;
  });

  it('is a composite Description component', function() {
    let component = ReactTestUtils.renderIntoDocument(<Description />);
    let validation = ReactTestUtils.isCompositeComponentWithType(component, Description);

    expect(validation).to.be.ok;
  });
});
