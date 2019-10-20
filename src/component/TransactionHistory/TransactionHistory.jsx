import React from 'react';
import T from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
        {items.map(item => (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
            ))}
        </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    items: T.arrayOf (
        T.shape({
            type: T.string.isRequired,
            amount: T.string.isRequired,
            currency: T.string.isRequired,
            }).isRequired
        ).isRequired
}

export default TransactionHistory;