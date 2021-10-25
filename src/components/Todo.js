import React from 'react'

class Todo extends React.Component {
  handleClick = () => {
    this.props.toggle(this.props.todo)
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        style={{ textDecoration: this.props.todo.completed && 'line-through' }}
      >
        {this.props.todo.task}
      </div>
    )
  }
}

export default Todo
