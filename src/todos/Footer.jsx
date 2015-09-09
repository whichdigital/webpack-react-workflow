import React from 'react'

export default class Footer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    )
  }

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      // Please note the currying technique we use below
      <a href="#" onClick={ this.handleClick.bind( this, filter ) }>
        {name}
      </a>
    )
  }

  handleClick( filter, event ) {
    event.preventDefault()
    this.props.onFilterChange( filter )
  }

}

Footer.propTypes = {
  onFilterChange: React.PropTypes.func.isRequired,
  filter: React.PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
