import React from "react";
import PropTypes from "prop-types";

function DynamicButton(props) {
    const { text, className } = props;
    return (
        <div>
            <button
                className={`h-12 text-white rounded-full shadow-lg bg-state duration-200 w-28 hover:scale-105 hover:drop-shadow-2xl hover:shadow-state-success hover:cursor-pointer bg-state-success ${className}`}
            >
                {text}
            </button>
        </div>
    );
}

DynamicButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
export default DynamicButton;
