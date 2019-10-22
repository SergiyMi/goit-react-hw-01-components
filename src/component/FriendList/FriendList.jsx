import React from 'react';
import T from 'prop-types';

import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const destruct = (array) => {
    const avatar = array.map(ar => ar.avatar);
    const name = array.map(ar => ar.name);
    const isOnline = array.map(ar => ar.isOnline);
    return {
        avatar, name, isOnline
    };
}

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
                <FriendListItem
                avatar = { destruct(friends).avatar }
                name = { destruct(friends).name }
                isOnline = { destruct(friends).isOnline }
                friends = { friends }
            />
        </ul>
    )
}

FriendList.propTypes = {
    friends: T.arrayOf (
        T.shape({
            avatar: T.string.isRequired,
            name: T.string.isRequired,
            isOnline: T.bool.isRequired,
            }).isRequired
        ).isRequired
}

export default FriendList;