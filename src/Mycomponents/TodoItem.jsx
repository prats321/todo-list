import React from 'react'

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h4 className='mt-3'>{todo.sno}. {todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>
        Delete
      </button>
    </div>
  )
}

