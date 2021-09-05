import React from 'react';
import styles from './LocationAndDate.module.css';

const Date = props => {
    return (
        <div className={styles.date}>{props.children}</div>
    );
};

export default Date;