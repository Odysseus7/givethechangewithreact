import React from 'react';
import './button.styles.scss';

const Button = ({children}) => {
    return (
        <button className="button-primary">{children}</button>
    )
}

export default Button;
