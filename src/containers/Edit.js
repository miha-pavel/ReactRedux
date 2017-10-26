import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onEditTodo } from "../actions/index"

import { Link } from "react-router-dom";

class Edit extends Component {
    saveTodo () {
        console.log('saveTodo', this.textField.value, this.props.todo.id);
        this.props.onEditTodo(this.textField.value, this.props.todo.id);
    }

    render(){
        return (
            <div>
                <textarea ref={(textarea) => { this.textField = textarea; }} defaultValue={this.props.todo.name}></textarea>
                <Link to={`/`}>
                    <button onClick={this.saveTodo.bind(this)}>Сохрaнить</button>
                </Link>
            </div>
        );
    }
}


function mapStateToProps (state) {
    return{
        todo: state.todos.selectedTodo
    }
}


function mapDispatchToProps (dispatch) {
    return{
        onEditTodo: bindActionCreators(onEditTodo, dispatch),
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(Edit);
