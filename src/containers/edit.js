import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onEditTodo, onEditError } from "../actions/index";
import EditComponent from "../components/edit";


class EditContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.selectedTodo.name};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    saveTodo(){
        if(this.state.name.length === 0) {
            this.props.onEditError();
        } else {
            this.props.onEditTodo(this.state.name, this.props.selectedTodo.id);
        }
    }

    render () {
        let sendProps = {
            name: this.state.name,
            saveTodo: this.saveTodo,
            handleNameChange: this.handleNameChange,
            errorEdit: this.props.errorEdit
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
    return {
        selectedTodo: state.todos.selectedTodo,
        errorEdit: state.todos.errorEdit || ""
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch,
        onEditTodo: bindActionCreators(onEditTodo, dispatch),
        onEditError: bindActionCreators(onEditError, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
