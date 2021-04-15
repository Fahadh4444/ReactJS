import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
    return (
        <ListGroup className="mt-3 mb-2" style={{ position: "initial", marginLeft: "200px", marginRight: "200px" }}>
            {todos.map(todo => (
                <ListGroupItem key={todo.id} style={{ backgroundColor: "black", color: "white", borderColor: "white" }}>
                    {todo.todoString}
                    <span className="float-right"
                        onClick={() => markComplete(todo.id)}
                    ><FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Todos;