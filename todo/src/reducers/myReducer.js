const initState = {
    todos: [{     
        item: "Learn about reducers",
        completed: true,
        id: 3892987589 
    },
    { 
        item: "test",
        completed: false,
        id: 123   
    }]
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("add todo action and state:", action, state)
            return { todos: [...state.todos, action.todo] }
        case "TOGGLE_COMPLETED":
            console.log("toggle completed action and state:", action, state)
            return { todos: state.todos.map(i => i.id===action.id ? { ...i, completed: !i.completed } : i) }
        case "CLEAR_COMPLETED":
            console.log("clear completed action and state:", action, state)
            return { todos: state.todos.filter(i => i.completed !== true) }
        default: 
            console.log(state)
            return state
    }
}

export { initState, reducer }