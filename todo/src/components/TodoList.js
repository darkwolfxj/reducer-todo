import React, { useReducer, useState } from "react";

import { reducer, initState } from "../reducers/myReducer";
import Todo from "./Todo";

export default function TodoList() {
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(reducer, initState); 
    const handleChanges = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", todo: { item: input, completed: false, id: Date.now() } });
        setInput("")
    }
    return (
        <div>
            { state.todos.map( todo => <Todo todo={ todo } dispatch={ dispatch } key={ todo.id } />) }
            <form onSubmit={ handleSubmit }>
            <div className="input-field">
                <input type="text" id="todo-input" value={ input } onChange={ handleChanges }/>
                git <label htmlFor="todo-input" className="greyed-text label">New Todo</label>
            </div>
            </form>
            <button onClick={ e => dispatch({ type: "CLEAR_COMPLETED" }) } className="waves-effect waves-light btn">Clear Completed</button>
        </div>
    )
}
