import React from 'react'
import TodoList from './components/TodoList'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={[{ name: 'Dishes', id: 1 }]} />
      </div>
    )
  }
}

export default App
