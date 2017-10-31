import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";




const TodoListComponent = ({ todos, deleteTodo, selectTodo }) => {
    return (
        <div>
            <div>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={deleteTodo.bind(this, todo)}>Удалить</button>
                        <Link to={`/todos/${todo.id}/`}>
                            <button onClick={selectTodo.bind(this, todo)}>Редактировать</button>
                        </Link>
                    </li>
                )}
            </div>
        </div>
    );
};

TodoListComponent.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
};

export default TodoListComponent;
