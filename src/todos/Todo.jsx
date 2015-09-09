import React from "react"

export default class Todo extends React.Component {

  render() {
    let textDecoration, cursor

    if ( this.props.completed ) {
      textDecoration = 'line-through'
      cursor = 'default'
    } else {
      textDecoration = 'none'
      cursor = 'pointer'
    }

    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: textDecoration,
          cursor: cursor
        }}>
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}
