import React, {useState} from 'react';

import firebase, { firestore } from '../../firebase/firebase.utils';

import { formatMoney } from '../../functions/functions';
import FormInput from '../form-input/formInput.component';
import Button from '../../components/button/button.component';

import './spendings-form.styles.scss';

const SpendingsForm = ({currentUser}) => {
    const [purchase, setPurchase] = useState("");

    const userId = currentUser.id;

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const change = calculateChange(purchase);
        updateBalance(userId, change);

        setPurchase("");
    }

    const reset = () => {
        firestore.collection('users').doc(userId).update({balance: 0});
    }

    return (
        <div>
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
        </div>
    )
}

export default SpendingsForm;
