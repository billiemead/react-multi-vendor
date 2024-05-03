import React from 'react';
import "../assets/css/buttons.css";

const Button = ( { onClick, children }) => {
    return (
        <button onClick={ onClick } className="hhh-button full">
            { children }
        </button>
    );
};

export default Button;