import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext);

    return (
        <ListGroup className="mt-3 mb-2" style={{ position: "initial", marginLeft: "200px", marginRight: "200px" }}>
            {todos.map(todo => (
                <ListGroupItem key={todo.id} style={{ backgroundColor: "black", color: "white", borderColor: "white" }}>
                    {todo.todoString}
                    <span className="float-right"
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: todo.id
                            })
                        }}
                    ><FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Todos;