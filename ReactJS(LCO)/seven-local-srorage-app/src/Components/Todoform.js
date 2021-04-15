import React, { useState, useContext } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a Todo")
        }
        const todo = {
            todoString,
            id: v4()
        };

        addTodos(todo);
        setTodoString("");
    }


    return (
        <Form onSubmit={handleSubmit} style={{ position: "initial", marginLeft: "200px", marginRight: "200px" }}>
            <FormGroup>
                <InputGroup>
                    <Input
                        style={{ backgroundColor: "black", color: "white" }}
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your Next Todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button style={{ borderRadius: "3px", color: "white", backgroundColor: "#B66404" }}>ADD</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;