import React from 'react';
import T from 'prop-types';

import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    const avatar = friends.map(friend => friend.avatar);
    const name = friends.map(friend => friend.name);
    const isOnline = friends.map(friend => friend.isOnline);

    return (
        <ul className={styles.friendList}>
                <FriendListItem
                avatar = { avatar }
                name = { name }
                isOnline = { isOnline }
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