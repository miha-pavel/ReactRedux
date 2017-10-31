import React from "react";
import PropTypes from "prop-types";

const AddComponent = ({ name, handleNameChange, addTodo }) => {
    return (
        <div>
            <input type="text" onChange={handleNameChange} value={name}/>
            <button onClick={addTodo}>Добавить</button>
        </div>
    );
};

AddComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default AddComponent;
