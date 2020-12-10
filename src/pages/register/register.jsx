import React from 'react'
import { SecondaryLogo } from '../../components/logo/logo.component';
import SignUp from '../../components/signup/signup.component';
import Footer from '../../components/footer/footer.component';
const Register = () => {
    return (
        <div className='sign-container'>
            <SecondaryLogo />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Register;
