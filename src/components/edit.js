import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EditComponent = ({state, handleNameChange, saveTodo}) => {
    return (
        <div>
            <textarea onChange={handleNameChange} value={state.name} defaultValue={state.name}></textarea>
            <Link to={`/`}>
                <button onClick={saveTodo}>Сохрaнить</button>
            </Link>
        </div>
    );
};

EditComponent.propTypes = {
    saveTodo: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
};

export default EditComponent;
