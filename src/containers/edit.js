import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onEditTodo } from "../actions/index";
import EditComponent from "../components/edit";


class EditContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ""};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    saveTodo () {
        this.props.onEditTodo(this.state.todo.name, this.state.todo.id);
    }

    render () {
        let sendProps = {
            state: this.state,
            saveTodo: this.saveTodo,
            handleNameChange: this.handleNameChange
        };
        return (
            <div>
                <EditComponent {...sendProps} />
            </div>
        );
    }
}


EditContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return{
        todo: state.todos.selectedTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onEditTodo: bindActionCreators(onEditTodo, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
