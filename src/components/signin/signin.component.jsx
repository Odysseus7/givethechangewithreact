import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { Link, Redirect } from 'react-router-dom';
import FormInput from '../form-input/formInput.component';
import Button from '../button/button.component';

import './signin.styles.scss';

const SignIn = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const [redirect, setRedirect] = useState(null);
    if(redirect) {
        return <Redirect to={redirect} />
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setRedirect(`${process.env.PUBLIC_URL}/dashboard`);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setLogin(prev => ({...prev, [name]: value}));
    }

    const {email, password} = login; // destructure login state to use variables

    return (
        <div className="sign-in">
            <h1 className="heading-primary">Sign in to start keeping track</h1>
            <p className="intro">
                If you don't have an account, you can register <Link to={`${process.env.PUBLIC_URL}/signup`}><span className="blue">here</span></Link>
            </p>

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

                <Button type="submit">sign in</Button>
                <Button onClick={signInWithGoogle} isGoogleSignIn>sign in with Google</Button>
            </form>
        </div>
    )
}

export default SignIn;
