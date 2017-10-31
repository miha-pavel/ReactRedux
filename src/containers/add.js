import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import AddComponent from "../components/add";
import {onAddTodo} from "../actions/index";


class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ""};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleNameChange(e) {
        this.setState({todo: e.target.value});
    }

    addTodo () {
        this.props.onAddTodo(this.state.todo);
    }

    render(){
        let sendProps = {
            state: this.state,
            addTodo: this.addTodo,
            handleNameChange: this.handleNameChange
        };
        return (
            <div>
                <AddComponent {...sendProps} />
            </div>
        );
    }
}


AddContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        onAddTodo: bindActionCreators(onAddTodo, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
