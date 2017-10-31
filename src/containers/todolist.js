import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

import { onDeleteTodo, onSelectTodo } from "../actions/index";
import TodoListComponent from "../components/todolist";
import AddContainer from "./add";


class TodoListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);
        this.selectTodo = this.selectTodo.bind(this);
    }

    deleteTodo (todo) {
        this.props.onDeleteTodo(todo.id);
    }

    selectTodo (todo) {
        this.props.onSelectTodo(todo);
    }

    render(){
        let sendProps = {
            todos: this.props.todos,
            deleteTodo: this.deleteTodo,
            selectTodo: this.selectTodo
        };
        return (
            <div>
                <div>
                    <AddContainer />
                </div>
                <ul>
                    <TodoListComponent {...sendProps} />
                </ul>
            </div>
        );
    }
}


TodoListContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return{
        todos: state.todos.todos
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch,
        onDeleteTodo: bindActionCreators(onDeleteTodo, dispatch),
        onSelectTodo: bindActionCreators(onSelectTodo, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
