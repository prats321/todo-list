import "./App.css";
import Header from "./Mycomponents/Header";
import {AddTodo} from "./Mycomponents/AddTodo";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import About from "./Mycomponents/About";
import React,{ useState , useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
   initTodo = [];
  }else{
   initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo)=>{
    console.log("i am on Delete of todo", todo);
    // deleting this way in react does not Work 
    // let index = todos.indexOf(todo);
    // todos.splice(index , 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;  
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding",title,desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }else {
      sno = todos[todos.length-1].sno + 1; 
    }  
    // This will always add todos Backwards 
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

  }

const [todos, setTodos] = useState(initTodo);
useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

  return (
    <>
     <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route path="/"element={
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>
          }/>
          
          <Route path="/about" element={<About/>} />
        </Routes> 
      <Footer />
    </Router>
    </>
  );                               
}

export default App;
