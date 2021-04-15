import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import TodoForm from "./Components/Todoform";
import Todos from "./Components/Todos";
import logo from "./FF.png"


const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container className="fluid" style={{ backgroundColor: "rgb(255,255,255,0.7)", paddingBottom: "200px", paddingTop: "30px", marginTop: "50px", marginBottom: "100px", border: "3px solid #00000030" }}>
      <div style={{ textAlign: "center" }}><img src={logo} style={{ width: "110px", height: "110px", }} ></img></div>
      <h1 style={{ marginBottom: "30px", color: "black", textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px #DDAB60", marginLeft: "200px", marginRight: "200px" }}>Todo App with Local Storage</h1>
      <TodoForm addTodos={addTodos} />
      <Todos todos={todos} markComplete={markComplete} />
    </Container>
  );
}

export default App;