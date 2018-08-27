import React, { Component } from 'react'
import Todo from './Todo'

class List extends Component {
  constructor(props){
    super(props)

    this.state = {
      newTask: '',
      todos: [],
    }
  }

  createTodo = (e) => {
    e.preventDefault()
    const task = this.state.newTask  
    if(task === ''|| task === undefined){ 
      console.log('error: title text input undefined')
      return 
    }

    const todos = this.state.todos.slice(0)
    const id = todos[todos.length - 1] ? todos[todos.length - 1].id : 0

    todos.push({
      id: id + 1,
      task: task
    })

    this.setState({
      todos: todos,
      newTask: ''
    })
  }

  deleteList = (e) => {
    e.preventDefault()
    this.props.deleteList(this.props.list_id)
  }

  deleteTodo = (todo_id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== todo_id)
    this.setState({todos: newTodos})
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({newTask: e.target.value})
  }

  render(){
    const renderedTodos = this.state.todos.map((todo, index) => (
      <Todo task={todo.task} todo_id={todo.id} deleteTodo={this.deleteTodo} key={index} />
    ))

    return (
      <div className={`list-container list_id_${this.props.list_id}`} >
        <p onClick={this.deleteList} className='delete'>X</p>
        <h3>{ this.props.title ? `${this.props.title}` : 'Title Placeholder' }</h3>

        <form className='new-todo' onSubmit={this.createTodo} >
          <input name='title' type='text' value={this.state.newTask} placeholder='Add a todo' onChange={this.handleInputChange} />
        </form>

        {renderedTodos}
      </div>
    )
  }
}

export default List