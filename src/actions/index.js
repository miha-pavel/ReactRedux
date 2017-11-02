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


export const onAddError = () => {
    return{
        type: "ERROR_ADD",
        payload: "You should enter TODO note"
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


export const onEditError = () => {
    return{
        type: "ERROR_EDIT",
        payload: "You should enter TODO note"
    };
}
