import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListsContainer from './components/ListsContainer'

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">NewtonX Todo</h1>
      </header>

      <ListsContainer />
    </div>
  )
}

export default App