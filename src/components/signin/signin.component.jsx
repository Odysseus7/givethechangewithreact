import React, { useState } from 'react'
import FormInput from '../form-input/formInput.component';

const SignIn = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async event => {
        event.preventDefault();

    }

    const handleChange = event => {
        const {name, value} = event.target;

        setLogin(prev => ({...prev, [name]: value}));
    }

    const {email, password} = login; // destructure login state to use variables

    return (
        <div className="sign-in">
            <h1 className="heading-primary">Sign in to start keeping track</h1>
            <p className="intro">If you don't have an account you can register <span>here</span></p>

            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
            </form>
        </div>
    )
}

export default SignIn;
