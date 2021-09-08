import React from 'react';
import styles from './LocationAndTime.module.css';

const Time = props => {
    return (
        <div className={styles.date}>{props.children}</div>
    );
};

export default Time;