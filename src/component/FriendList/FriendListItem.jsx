import React from 'react';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, friends }) => {
    let onOf;
    return (
        friends.map((friend, index) => (
            (isOnline[index] ? onOf=styles.isOn : onOf=styles.isOff),
            <li className={styles.item}>
                <span className={onOf + ' ' + styles.circle}></span>
                <img className={styles.avatar} src={avatar[index]} alt=""/>
                <p className={styles.name}>{name[index]}</p>
            </li>
        ))
    )
}

export default FriendListItem;