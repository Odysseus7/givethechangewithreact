import React from 'react';

import Logo, { SecondaryLogo } from '../../components/logo/logo.component';
import SignIn from '../../components/signin/signin.component';
import Footer from '../../components/footer/footer.component';

import './index.styles.scss';

const index = () => {
    return (
        <div className="sign-up-container">
            <Logo />
            <SignIn />
            <Footer />
        </div>
    )
}

export default index;
