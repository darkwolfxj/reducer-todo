import React, { useReducer } from "react"

import { reducer, initState } from "../reducers/myReducer";

 

export default function Todo(props) {
    const [state, dispatch] = useReducer(reducer, initState);
    const handleClick = () => { dispatch( { type: "TOGGLE_COMPLETED", id: props.todo.id } ) };
    return (
        <>
            <div onClick={ handleClick } className={ `item ${ props.todo.completed  ? " completed" : ""}`} >
                { props.todo.item }   
                { props.todo.id }
                { JSON.stringify(props.todo.completed) }
            </div>
        </>
    )
}
