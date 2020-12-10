import React from 'react';
import './button.styles.scss';

const Button = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? "google-sign-in" : ""} button-primary`} {...otherProps}>{children}</button>
    )
}

export default Button;
