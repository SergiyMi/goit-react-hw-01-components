import React from 'react';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, friends }) => {
    return (
        friends.map((friend, index) => (
                <li className={styles.item}>
                <span className={isOnline[index] ? styles.isOn : styles.isOff + ' ' + styles.circle}></span>
                <img className={styles.avatar} src={avatar[index]} alt=""/>
                <p className={styles.name}>{name[index]}</p>
            </li>
            )
        )
    )
}

export default FriendListItem;