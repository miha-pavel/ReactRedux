import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onAddTodo, onDeleteTodo, onSelectTodo } from "../actions/index"
import { Link } from "react-router-dom";

class App extends Component {

    addTodo () {
        this.props.onAddTodo(this.todoInput.value);
        this.todoInput.value = "";
    }

    deleteTodo (todo) {
        this.props.onDeleteTodo(todo.id);
    }

    selectTodo (todo) {
        this.props.onSelectTodo(todo);
    }

    render(){
        return (
            <div className="App">
                <div>
                    <input type="text" ref={(input) => { this.todoInput = input }}/>
                    <button onClick={this.addTodo.bind(this)}>Добавить</button>
                </div>
                <div>
                    <ul>
                        {this.props.todos.map((todo) =>
                            <li key={todo.id}>
                                {todo.name}
                                <button onClick={this.deleteTodo.bind(this, todo)}>Удалить</button>
                                <Link to={`/todos/${todo.id}`}>
                                    <button onClick={this.selectTodo.bind(this, todo)}>Редактировать</button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        todos: state.todos.todos
    }
}


function matchDispatchToProps (dispatch) {
    return{
        onAddTodo: bindActionCreators(onAddTodo, dispatch),
        onDeleteTodo:  bindActionCreators(onDeleteTodo, dispatch),
        onSelectTodo:  bindActionCreators(onSelectTodo, dispatch)
    }
}

export default connect( mapStateToProps, matchDispatchToProps )(App);
