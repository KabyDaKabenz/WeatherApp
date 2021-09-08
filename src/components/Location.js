import React from 'react';
import styles from './LocationAndTime.module.css';

const Location = (props) => {
    return (
        <div className={styles.location}>{props.children}</div>
    );
}

export default Location;