import React from "react"
import Button from "./Button.jsx"
import EditableTextBox from "./EditableTextBox.jsx"

export default class extends React.Component {
  constructor(props) {
    super( props )
    this.bindInstanceMethods()

    this.state = {
      editing: false
    }
  }

  bindInstanceMethods() {
    let methods = [
      "startEditing",
      "handleInputBlur",
      "handleKeyPress",
      "renderDelete",
      "renderInput",
      "renderTask"
    ]
    for ( let method of methods ) {
      this[ method ] = this[ method ].bind( this )
    }
  }

  render() {
    let editing = this.state.editing
    let renderedElement
    if ( editing ) {
      renderedElement = this.renderInput()
    } else {
      renderedElement = this.renderTask()
    }

    return renderedElement
  }

  renderTask() {
    let renderedDelete
    if ( this.props.onDeleteCompleted ) {
      renderedDelete = this.renderDelete()
    }

    return (<div onClick={this.startEditing}>
      <span>{this.props.task}</span>
      {renderedDelete}
    </div>)
  }

  renderDelete() {
    return (<Button
      text="X"
      onClick={this.props.onDeleteCompleted}
    />)
  }

  renderInput() {
    return (<EditableTextBox
      defaultValue={this.props.task}
      onBlur={this.handleInputBlur}
      onKeyPress={this.handleKeyPress}
    />)
  }

  startEditing() {
    this.setState({
      editing: true
    })
  }

  stopEditing() {
    this.setState({
      editing: false
    })
  }

  handleInputBlur( event ) {
    this.props.onEditCompleted( event.target.value )
    this.stopEditing()
  }

  handleKeyPress( event ) {
    if( event.key !== "Enter" ) {
      return
    }
    this.handleInputBlur( event )
  }

}
