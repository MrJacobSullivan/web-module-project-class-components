import React from 'react'

class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggleItem(this.props.todo)
  }

  render() {
    return <p onClick={this.handleClick}>{this.props.todo.task}</p>
  }
}

export default Todo
