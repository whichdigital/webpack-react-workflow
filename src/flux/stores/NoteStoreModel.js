import uuid from "node-uuid"
import NoteActions from "../actions/NoteActions"

export default class {

  constructor() {
    this.bindActions( NoteActions )

    this.notes = []
  }

  create( note ) {
    let notes = this.notes

    note.id = uuid.v4()

    this.setState({
      notes: notes.concat( note )
    })
  }

  update( {id, task} ) {
    let noteIndex = this.findNoteIndexById( id )
    if ( noteIndex < 0 ) {
      return
    }

    let notes = this.notes
    notes[ noteIndex ].task = task
    this.setState({ notes })
  }

  findNoteIndexById( id ) {
    let notes = this.notes
    let noteIndex = notes.findIndex( ( note ) => note.id === id )

    if ( noteIndex < 0 ) {
      console.warn( "Could not find note", id, notes )
    }

    return noteIndex
  }

  delete( id ) {
    let noteIndex = this.findNoteIndexById( id )
    if ( noteIndex < 0 ) {
      return
    }

    let notes = this.notes
    notes.splice( noteIndex, 1 )
    this.setState({ notes })
  }
}
