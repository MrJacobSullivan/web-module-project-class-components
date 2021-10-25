import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={[{ name: 'Dishes', id: 1 }]} />
        <TodoForm />
      </div>
    )
  }
}

export default App
