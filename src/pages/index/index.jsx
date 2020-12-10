import React from 'react';

import Logo from '../../components/logo/logo.component';
import SignIn from '../../components/signin/signin.component';
import Footer from '../../components/footer/footer.component';

import './index.styles.scss';

const index = () => {
    return (
        <div className="sign-container">
            <Logo />
            <SignIn />
            <Footer />
        </div>
    )
}

export default index;
