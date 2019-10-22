import React from 'react';
import T from 'prop-types';

import styles from './Stats.module.css';

const Stats = ({ stats }) => {
    const {title} = stats;
    return (
        <section className={styles.section}>
            { {title} && <h2 className="title">{title}</h2>}

        <ul className={styles.list}>
            {stats.map(stat=>(
                <li className={styles.item} key={stat.id}>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
            ))}
        </ul>
        </section>
    )
}

Stats.defaultProps = {
    title: 'Upload stats',
}

Stats.propTypes = {
    title: T.string,
    stats: T.arrayOf (
        T.shape({
            id: T.string.isRequired,
            label: T.string.isRequired,
            percentage: T.number.isRequired,
            }).isRequired
        ).isRequired
}

export default Stats;