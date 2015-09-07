import React from "react"
import Button from "./Button.jsx"
import Notes from "./Notes.jsx"
import NoteActions from "../flux/actions/NoteActions.js"
import NoteStore from "../flux/stores/NoteStore.js"
import "./Todos.css"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.bindInstanceMethods()

    this.state = NoteStore.getState()
  }

  bindInstanceMethods() {
    this.setState = this.setState.bind( this )
  }

  componentDidMount() {
    NoteStore.listen( this.setState )
  }

  componentWillUnmount() {
    NoteStore.unlisten( this.setState )
  }

  render() {
    let notes = this.state.notes

    return (
      <div>
        <Button onClick={this.addNote} text="+" className="note-add-button" />
        <Notes
          items={notes}
          onEditCompleted={this.editNote}
          onDeleteCompleted={this.deleteNote} />
      </div>
    )
  }

  addNote() {
    NoteActions.create( {task: "New task"} )
  }

  editNote( id, task ) {
    NoteActions.update( {id, task} )
  }

  deleteNote( id ) {
    NoteActions.delete( id )
  }
}
