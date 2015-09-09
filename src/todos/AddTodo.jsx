import React from 'react'

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props)
    this.bindInstanceMethods( "handleClick" )
  }

  bindInstanceMethods( ...methods ) {
    methods.forEach(
      ( method ) => this[ method ] = this[ method ].bind( this )
    )
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={this.handleClick}>
          Add
        </button>
      </div>
    )
  }

  handleClick( event ) {
    let node = React.findDOMNode( this.refs.input )
    let text = node.value.trim()
    this.props.onAddClick( text )
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: React.PropTypes.func.isRequired
}
