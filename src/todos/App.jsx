import React from "react"
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters }
  from '../flux/actions'
import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {

  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch( addTodo( text ) )
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => {
            dispatch( completeTodo( index ) )
          }} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch( setVisibilityFilter( nextFilter ) )
          } />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: React.PropTypes.arrayOf( React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  }) ),
  visibilityFilter: React.PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  // TODO Switch statements are a no-no
  switch ( filter ) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter( todo => todo.completed )
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter( todo => !todo.completed )
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos( state.todos, state.visibilityFilter ),
    visibilityFilter: state.visibilityFilter
  }
}

// Wrap the component to inject dispatch and state into it
export default connect( select )( App )
