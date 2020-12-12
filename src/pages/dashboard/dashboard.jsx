import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import './dashboard.styles.scss';

const Dashboard = ({currentUser}) => {
    return (
        <div className="dashboard">
            <h1>Hello {currentUser.displayName}!</h1>
            { currentUser ? <div className="logout" onClick={() => auth.signOut()}>sign out</div> : null}
        </div>
    )
}

export default Dashboard;
