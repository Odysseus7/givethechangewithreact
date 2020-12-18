import React from 'react';

import { displayDate } from '../../functions/functions';
import './displaydate.styles.scss';

const DisplayDate = () => {
    return (
        <div>
            <p className="date">{`${displayDate()}`}</p>
        </div>
    )
}

export default DisplayDate;
