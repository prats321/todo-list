import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  let myStyle = {
    minHeight : "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <hr className="mt-5"/>
      <h3 className=" my-3">TodosList</h3>
      <hr />
      {props.todos.length===0? "No Todos to Display :(" :
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno}  onDelete={props.onDelete} />
          <hr/>
          </>
          )
      })
      }
    </div>
  )
}
