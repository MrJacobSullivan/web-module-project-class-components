import React from 'react'

class TodoForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()

    // create new todo
    const newTodo = {
      task: null,
      id: Date.now(),
      completed: false,
    }

    this.props.handleAddItem(newTodo)
  }

  handleClear = () => {
    this.props.handleClearItems()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' />
        <button>Add Todo</button>
        <button type='button' onClick={this.handleClear}>
          Clear Completed
        </button>
      </form>
    )
  }
}

export default TodoForm
