import React from "react";
import PropTypes from "prop-types";

const AddComponent = ({ state, handleNameChange, addTodo, error }) => {
    return (
        <div>
            <input type="text" onChange={handleNameChange} placeholder="Enter your todo note" value={state.name}/>
            <button onClick={addTodo}>Добавить</button>
            <div>
                {error}
            </div>
        </div>
    );
};

AddComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    error: PropTypes.string,
};

export default AddComponent;
