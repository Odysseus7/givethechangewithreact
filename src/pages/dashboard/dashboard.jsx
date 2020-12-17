import React, {useState} from 'react';

import Logo from '../../components/logo/logo.component';

import firebase, { auth, firestore } from '../../firebase/firebase.utils';

import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/formInput.component';
import Button from '../../components/button/button.component';

import './dashboard.styles.scss';

const Dashboard = ({currentUser}) => {
    const [purchase, setPurchase] = useState("");

    const userId = currentUser.id;

    const displayDate = () => {
        const date = new Date();
        const options = { weekday: "long", month: "long", day: "numeric", year: "numeric"};

        return date.toLocaleDateString('en-EN', options).toLowerCase();
    }

    const formatMoney = (number) => {
        return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(number);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setPurchase(value);
    }

    const updateBalance = (userId, amount) => {
        const update = firebase.firestore.FieldValue.increment(amount);
        firestore.collection('users').doc(userId).update({ balance: update });
    }

    const calculateChange = (amount) => {
        if(amount.indexOf('.') == -1) { // check if round purchase is entered, eg 2. Then change = 0.
            return 0;
        } else {
            // Only get decimal part of change
            let dec = parseInt((amount).split(".")[1]);

            // check if no leading zeroes were entered
            if((amount).split(".")[1].length === 1) {
                dec = parseInt((amount).split(".")[1] + "0");
            }

            

            const cents = dec / 100;
            const change = 1 - cents;
            return change;
        }
        
    }

    const reset = () => {
        firestore.collection('users').doc(userId).update({balance: 0});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const change = calculateChange(purchase);
        updateBalance(userId, change);

        setPurchase(0);
    }

    return (
        <div className="dashboard">
            
            <div className="main">
            <Logo />
                <p className="date">{`${displayDate()}`}</p>
                <div className="balance">
                    <p className="balance_text">current balance</p>
                    <div className="balance_amount">{formatMoney(currentUser.balance)}</div>
                </div>

                <form className="add" onSubmit={handleSubmit} method="post">
                    <div className="add_intro">
                        <p>
                            Hi <span className="bold">{currentUser.displayName}</span>! What are your spendings today?
                        </p>
                    </div>

                    <FormInput
                        type="number"
                        name="purchase"
                        value={purchase}
                        onChange={handleChange}
                        placeholder={formatMoney(2.70)}
                        min="0"
                        step=".01"
                        required
                    />
                    <Button type="submit">add</Button>
                    <Button onClick={reset}>reset</Button>
                    
                </form>
                { currentUser ? <div className="logout" onClick={() => auth.signOut()}>sign out</div> : null}
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;
