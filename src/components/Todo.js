import React from 'react'

import './Todo.css'

class Todo extends React.Component {
  handleClick = () => {
    this.props.toggle(this.props.todo)
  }

  render() {
    return (
      <div onClick={this.handleClick} className={this.props.todo.completed ? 'completed' : null}>
        {this.props.todo.task}
      </div>
    )
  }
}

export default Todo
