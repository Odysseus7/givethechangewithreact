import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import './logout.styles.scss';

const Logout = ({currentUser}) => {
    return (
        <div>
            { currentUser ? <div className="logout" onClick={() => auth.signOut()}>sign out</div> : null}
        </div>
    )
}

export default Logout;
