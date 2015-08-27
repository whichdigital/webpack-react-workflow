import React from 'react';
import Heading from './heading.jsx';
import Description from './description.jsx';

export default class extends React.Component {
  render() {
    return (
      <section>
        <Heading />
        <Description />
      </section>
    );
  }
}
