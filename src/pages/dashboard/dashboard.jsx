import React from 'react';

import firebase, { auth, firestore } from '../../firebase/firebase.utils';

import './dashboard.styles.scss';

const updateBalance = (userId, amount) => {
    const update = firebase.firestore.FieldValue.increment(amount);
    firestore.collection('users').doc(userId).update({ balance: update });
}

const Dashboard = ({currentUser}) => {
    const userId = currentUser.id;

    firestore.collection('users').doc(userId)
    .get()
    .then(user => {
        const data = user.data();
        console.log(data);
    });

    return (
        <div className="dashboard">
            <h1>Hello {currentUser.displayName}!</h1>
            <p>Hello {currentUser.balance}</p>
            { currentUser ? <div className="logout" onClick={() => auth.signOut()}>sign out</div> : null}
            <button onClick={() => updateBalance(userId, -2.50)}>Hello</button>
        </div>
    )
}

export default Dashboard;
