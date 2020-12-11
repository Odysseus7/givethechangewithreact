import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import './dashboard.styles.scss';

const Dashboard = ({currentUser}) => {
    return (
        <div className="dashboard">
            <h1>Hello {currentUser.displayName}!</h1>
        </div>
    )
}

export default Dashboard;
