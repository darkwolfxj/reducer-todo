import React, { useReducer } from "react"

export default function Todo(props) {
    const handleClick = () => { 
    props.dispatch( { type: "TOGGLE_COMPLETED", id: props.todo.id } )
    console.log("clicked", props.todo.id)
    };
    
    return (
        <>
            <div onClick={ handleClick } className={ `item ${ props.todo.completed  ? " completed" : ""} ` } >
                { props.todo.item }
            </div>
        </>
    )
}
