const initialState = {
    todos: [],
    selectedTodo: {}
};

export default function todos(state = initialState, action){
    switch (action.type) {

        case "ADD_TODO":
            const new_array = state.todos.slice();
            new_array.push(action.payload);
            return {
                ...state,
                todos: new_array
            };

        case "DELETE_TODO":
            const deleteId = action.payload.id;
            const deleteIndex = state.todos.indexOf(state.todos.filter(todo => todo.id === deleteId)[0]);
            const beforDelete = state.todos.slice(0, deleteIndex);
            const afterDelete = state.todos.slice(deleteIndex + 1);
            const newArray = beforDelete.concat(afterDelete);
            return {
                ...state,
                todos: newArray,
            }

        case "SELECT_TODO":
            return {
                ...state,
                selectedTodo: action.payload
            };

        case "EDIT_TODO":
            const newName = action.payload.name;
            const newSelectedTodos = {
                ...state.selectedTodo,
                name: newName
            };
            const todoId = action.payload.id;
            const todoIndex = state.todos.indexOf(state.todos.filter(todo => todo.id === todoId)[0]);
            const beforSelect = state.todos.slice(0, todoIndex);
            const afterSelect = state.todos.slice(todoIndex + 1);
            beforSelect.push(newSelectedTodos);
            const finalArray = beforSelect.concat(afterSelect);
            return {
                ...state,
                todos: finalArray,
                selectedTodo: newSelectedTodos
            }


        default:
            return state;
    }
}
