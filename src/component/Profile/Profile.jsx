import React from 'react';
import T from 'prop-types';

import styles from './Profile.module.css';
import Description from './Description';
import ProfStats from './ProfStats';

const Profile = ({ user }) => {
    const { avatar, name, tag, alt, location, stats } = user ;
    const entries=Object.entries(stats);
    return   (  
    <div className={styles.profile}>
        < Description 
            avatar={ avatar }
            name={ name }
            tag={ tag }
            alt={ alt }
            location={ location }
        />
        < ProfStats items = { entries }/>
    </div>
    )
}

Profile.defaultProps = {
    alt: 'user avatar',
}

Profile.propTypes = {
    user: T.shape({
        avatar: T.string.isRequired,
        name: T.string.isRequired,
        tag: T.string.isRequired,
        alt: T.string,
        location: T.string.isRequired,
        stats: T.shape({
            followers: T.number.isRequired,
            views: T.number.isRequired,
            likes: T.number.isRequired
        }).isRequired
    }).isRequired
}

export default Profile;