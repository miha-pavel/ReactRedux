import React from 'react';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";

import TodoListContainer from "./todolist";
import EditContainer from "./edit";


export const App = () => {
    return (
        <div>
            <Route exact path="/" component={TodoListContainer}/>
            <Route path="/todo/:id/" component={EditContainer}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect( mapStateToProps )(App);
