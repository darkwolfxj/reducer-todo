const initState = [{
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
}]

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            let todo = action.todo;
            return [...state, todo];
        case "TOGGLE_COMPLETED":
            return state.map(i => i.id===action.id ? { ...i, completed: !i.completed } : i)
        case "CLEAR_COMPLETED":
            return state.filter(i => i.completed !== false)
        default: 
            return state;
    }
}

export { initState, reducer }