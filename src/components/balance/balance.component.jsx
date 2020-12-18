import React from 'react';

import { formatMoney } from '../../functions/functions';
import './balance.styles.scss';

const Balance = ({currentUser}) => {
    return (
        <div className="balance">
            <p className="balance_text">current balance</p>
            <div className="balance_amount">{formatMoney(currentUser.balance)}</div>
        </div>
    )
}

export default Balance;
