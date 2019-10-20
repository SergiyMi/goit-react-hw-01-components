import React from 'react';

import styles from './Profile.module.css';

const ProfStats = ({ items }) => {
    const len = items.length;
    return (
        <ul className={styles.stats}>
            {items.map((item, index) => ( 
                <li className={(index + 1  !== len) && styles.vline}>
                    <span className={styles.label}>{item[0]}</span>
                    <span className={styles.quantity}>{item[1]}</span>
                </li>   
            ))}
    </ul> 
    )
}

export default ProfStats;