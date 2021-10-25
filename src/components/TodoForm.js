import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = { task: '' }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, task: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // create new todo
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }

    this.props.handleAddItem(newTodo)
    this.setState({ ...this.state, task: '' })
  }

  handleClear = () => this.props.handleClearItems()

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='task' value={this.state.task} onChange={this.handleChange} />
        <button>Add Todo</button>
        <button type='button' onClick={this.handleClear}>
          Clear Completed
        </button>
      </form>
    )
  }
}

export default TodoForm
