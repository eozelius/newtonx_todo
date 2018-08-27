import React, { Component } from 'react'
import List from './List.js'

class ListsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      lists: [],
      newListName: '',
    }
  }

  createList = (e) => {
    e.preventDefault()
    const title = this.state.newListName
    if(title === ''|| title === undefined){ return }

    const lists = this.state.lists.slice(0)
    const id = lists[lists.length - 1] ? lists[lists.length - 1].id : 0
    lists.push({
      id: id + 1,
      title: title,
    })
    this.setState({
      lists: lists,
      newListName: ''
    })
  }

  deleteList = (list_id) => {
    if(!Number.isInteger(list_id)){
      console.log('error: list ID must be defined')
      return
    }

    const lists = this.state.lists.slice(0).filter((list) => list.id !== list_id )
    this.setState({ lists: lists })
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({newListName: e.target.value})
  }

  render(){
    const renderedLists = this.state.lists.map((list, index) => ( 
      <List todos={list.todos} title={list.title} list_id={list.id} key={index}
            deleteList={this.deleteList} deleteTodo={this.deleteTodo} onSubmit={this.createTodo} />
    ))

    return (
      <div className='lists-container'>

        <form onSubmit={this.createList} id='new-list'>
          <input name='title' type='text' value={this.state.newListName} placeholder='create a new list' onChange={this.handleInputChange} />
        </form>

        <div className='lists'>
          {renderedLists}
        </div>

      </div>
    )
  }
}

export default ListsContainer