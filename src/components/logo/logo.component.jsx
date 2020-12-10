import React from 'react'
import {ReactComponent as LogoBig} from './logo.svg';
import {ReactComponent as LogoSmall} from './logosmall.svg';

import './logo.styles.scss';

const MainLogo = () => {
    return (
        <div className="logobig">
            <LogoBig />
        </div>
    )
}

export const SecondaryLogo = () => {
    return (
        <div className="logosmall">
            <LogoSmall />
        </div>
    )
}

export default MainLogo;
