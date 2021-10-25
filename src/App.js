import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = { todos: [{ task: 'Dishes', id: 1, completed: false }] }
  }

  // handle toggle item
  handleToggleItem = (clickedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedTodo.id) {
          return { ...todo, completed: todo.completed ? false : true }
        }
        return todo
      }),
    })
  }

  // handle clear items
  handleClearItems = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.completed),
    })
  }

  // handle add item
  handleAddItem = (newTodo) => {
    this.setState({ ...this.state, todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleToggleItem={this.handleToggleItem} />
        <TodoForm handleAddItem={this.handleAddItem} handleClearItems={this.handleClearItems} />
      </div>
    )
  }
}

export default App
