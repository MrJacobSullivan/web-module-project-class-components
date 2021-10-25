import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = { todos: [{ task: 'Dishes', id: 1, completed: false }] }
  }

  // handle toggle item
  handleToggleItem = (item) => {}

  // handle clear items
  handleClearItems = () => console.log('clear')

  // handle add item
  handleAddItem = (newTodo) => console.log('add', newTodo)

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm handleAddItem={this.handleAddItem} handleClearItems={this.handleClearItems} />
      </div>
    )
  }
}

export default App
