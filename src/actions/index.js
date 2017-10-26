export const onAddTodo = (name) => {
    const payload = {
        id: Date.now().toString(),
        name
    }
    return{
        type: "ADD_TODO",
        payload
    };
}


export const onDeleteTodo = (id) => {
    const payload = {
        id: id
    }
    return {
        type: "DELETE_TODO",
        payload
    };
}


export const onSelectTodo = (todo) => {
    return {
        type: "SELECT_TODO",
        payload: todo
    };
}


export const onEditTodo = (name, id) => {
    const payload = {
        name: name,
        id: id
    }
    return{
        type: "EDIT_TODO",
        payload
    };
}
