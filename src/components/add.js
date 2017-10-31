import React from "react";
import PropTypes from "prop-types";

const AddComponent = ({ state, handleNameChange, addTodo }) => {
    return (
        <div>
            <input type="text" onChange={handleNameChange} value={state.name}/>
            <button onClick={addTodo}>Добавить</button>
        </div>
    );
};

AddComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
};

export default AddComponent;
