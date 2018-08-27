import React from 'react'

const Todo = (props) => {
  const deleteTodo = (e) => {
    e.preventDefault()
    props.deleteTodo(props.todo_id)
  }

  return (
    <div className={`todo-container todo_id_${props.todo_id}`}>
      <p>
        <span onClick={deleteTodo} className='delete'>{props.deleteTodo ? 'x' : ''} </span>
        {props.task ? props.task : 'title placeholder'}
      </p>
    </div>
  )
}

export default Todo
