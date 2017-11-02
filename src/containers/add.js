import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import AddComponent from "../components/add";
import {onAddTodo, onAddError} from "../actions/index";


class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    addTodo(){
        if(this.state.name.length === 0) {
            this.props.onAddError();
        } else {
            this.props.onAddTodo(this.state.name);
            this.setState({name: ""});
        }
    }

    render(){
        let sendProps = {
            state: this.state,
            addTodo: this.addTodo,
            handleNameChange: this.handleNameChange,
            error: this.props.error
        };
        console.log(sendProps);
        return (
            <div>
                <AddComponent {...sendProps} />
            </div>
        );
    }
}


AddContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};


const mapStateToProps = (state) => {
    return {
        error: state.todos.error || ""
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        onAddTodo: bindActionCreators(onAddTodo, dispatch),
        onAddError: bindActionCreators(onAddError, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
