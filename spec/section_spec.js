import 'core-js/es5';
import React from 'react/addons';
import Section from '../src/book/section.jsx'; // eslint-disable-line no-unused-vars
import Heading from '../src/book/heading.jsx';
import Description from '../src/book/description.jsx';

describe('Section', function() {
  let sectionComponent;

  before(function() {
    let ReactTestUtils = React.addons.TestUtils,
      shallowRenderer = ReactTestUtils.createRenderer();

    shallowRenderer.render( <Section/> );
    sectionComponent = shallowRenderer.getRenderOutput();
  });

  it('is wrapped in <section> element', function() {
    expect( sectionComponent.type ).to.equal( 'section' );
  });

  describe('checks if children exist regardless of their order', function() {
    let children;

    before(function() {
      children = sectionComponent.props.children;
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
  it('includes Heading and Description components in particular order', function() {
    expect( sectionComponent.props.children ).to.eql( [
      <Heading />,
      <Description />
    ] );
  });
});
