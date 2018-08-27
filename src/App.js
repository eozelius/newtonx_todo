import React from 'react'
import logo from './logo.svg'
import './App.css'
import TodoApp from './components/TodoApp'

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">NewtonX Todo</h1>
      </header>

      <TodoApp />
    </div>
  )
}

export default App