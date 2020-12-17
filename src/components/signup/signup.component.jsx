import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Redirect } from 'react-router-dom';
import FormInput from '../form-input/formInput.component';
import Button from '../button/button.component';

import './signup.styles.scss';

const SignUp = () => {
    const [register, setRegister] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [redirect, setRedirect] = useState(null);

    if(redirect) {
        return <Redirect to={redirect} />
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return; 
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setRedirect("/dashboard");

        } catch (error) {
            console.error(error);
        }
    }


    const handleChange = event => {
        const {name, value} = event.target;

        setRegister(prev => ({...prev, [name]: value}));
    }

    const { displayName, email, password, confirmPassword } = register; // destructure login state to use variables

    return (
        <div className="signup">
            <h1 className="heading-primary">Let's sign you up.</h1>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
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
