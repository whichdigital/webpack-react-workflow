import React from "react"
import Note from "./Note.jsx"

export default class extends React.Component {
  constructor(props) {
    super( props )
    this.bindInstanceMethods()
  }

  bindInstanceMethods() {
    this.renderNote = this.renderNote.bind( this )
  }

  render() {
    let notes = this.props.items,
      className = this.props.className || "notes"

    return (
      <ul className={className}>
        {notes.map( this.renderNote )}
      </ul>
    )
  }

  renderNote( note ) {
    let onEditCompleted = this.props.onEditCompleted.bind( null, note.id )
    let onDeleteCompleted = this.props.onDeleteCompleted.bind( null, note.id )
    return (
      <li key={`note${note.id}`}>
        <Note
          task={note.task}
          onEditCompleted={onEditCompleted}
          onDeleteCompleted={onDeleteCompleted}
        />
      </li>
    )
  }
}
