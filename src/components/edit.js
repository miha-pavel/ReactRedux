import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EditComponent = ({name, handleNameChange, saveTodo}) => {
    return (
        <div>
            <textarea onChange={handleNameChange} value={name}></textarea>
            <Link to={`/`}>
                <button onClick={saveTodo}>Сохрaнить</button>
            </Link>
        </div>
    );
};

EditComponent.propTypes = {
    saveTodo: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default EditComponent;
