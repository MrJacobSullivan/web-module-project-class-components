import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = { todos: [] }
  }

  handleToggleItem = (clickedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        return todo.id === clickedTodo.id
          ? { ...todo, completed: todo.completed ? false : true }
          : todo
      }),
    })
  }

  handleClearItems = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.completed),
    })
  }

  handleAddItem = (newTodo) => {
    this.setState({ ...this.state, todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggle={this.handleToggleItem} />
        <TodoForm add={this.handleAddItem} clear={this.handleClearItems} />
      </div>
    )
  }
}

export default App
