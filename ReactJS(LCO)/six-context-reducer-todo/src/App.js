import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/Todoform";
import Todos from "./Components/Todos";
import logo from "./FF.png"


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container className="fluid" style={{ backgroundColor: "rgb(255,255,255,0.7)", paddingBottom: "200px", paddingTop: "30px", marginTop: "50px", marginBottom: "100px", border: "3px solid #00000030" }}>
        <div style={{ textAlign: "center" }}><img src={logo} style={{ width: "110px", height: "110px", }} ></img></div>
        <h1 style={{ marginBottom: "30px", color: "black", textShadow: "1px 1px 2px white, 0 0 25px white, 0 0 5px #DDAB60", marginLeft: "200px", marginRight: "200px" }}><bold>Todo App with Context APIs</bold></h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider >
  );
}

export default App;