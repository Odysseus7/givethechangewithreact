import React from 'react';

import Logo from '../../components/logo/logo.component';

import DisplayDate from '../../components/displaydate/displaydate.component.jsx';
import Balance from '../../components/balance/balance.component';
import SpendingsForm from '../../components/spendings-form/spendings-form.component';
import Logout from '../../components/logout/logout.component';
import Footer from '../../components/footer/footer.component';

import './dashboard.styles.scss';



const Dashboard = ({currentUser}) => {
    return (
        <div className="dashboard">
            
            <div className="main">
                <Logo />

                <DisplayDate />
                <Balance currentUser={currentUser} />
                <SpendingsForm currentUser={currentUser} />
                <Logout currentUser={currentUser} />

                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;
