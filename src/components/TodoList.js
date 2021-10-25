import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggle={this.props.toggle} />
        ))}
      </div>
    )
  }
}

export default TodoList
