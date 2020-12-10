import React, { useState } from 'react'
import FormInput from '../form-input/formInput.component';
import Button from '../button/button.component';
import './signup.styles.scss';

const SignUp = () => {
    const [register, setRegister] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setRegister(prev => ({...prev, [name]: value}));
    }

    const { firstname, lastname, email, password, confirmPassword } = register; // destructure login state to use variables

    return (
        <div className="signup">
            <h1 className="heading-primary">Let's sign you up.</h1>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleChange}
                    label="Firstname"
                    required
                />

                <FormInput
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                    label="Lastname"
                    required
                />

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

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm password"
                    required
                />

                <Button>sign up</Button>
            </form>
        </div>
    )
}

export default SignUp;
