import React from 'react'

class Todo extends React.Component {
  render() {
    return <div>{this.props.todo.name}</div>
  }
}

export default Todo
