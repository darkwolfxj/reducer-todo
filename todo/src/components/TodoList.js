import React, { useReducer, useState } from "react";

import { reducer, initState } from "../reducers/myReducer";
import Todo from "./Todo";

export default function TodoList() {
    const [ input, setInput ] = useState("");
    const [state, dispatch] = useReducer(reducer, initState); 
    const handleChanges = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        let name = document.getElementById("todo-input").value;
        dispatch({ type: "ADD_TODO", todo: { item: name, completed: false, id: Date.now() } });
        setInput("")
    }
    return (
        <div>
            { state.map( todo=> <Todo todo={ todo } key={ Date.now() } />) }
            <form onSubmit={ handleSubmit }>
                <input  type="text" id="todo-input" placeholder="new todo" value={ input } onChange={ handleChanges }/>
            </form>
            <button onClick={ e => e.preventDefault() && dispatch({ type: "CLEAR_COMPLETED" }) }>Clear Completed</button>
        </div>
    )
}
