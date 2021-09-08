import React from 'react';
import styles from './Weather.module.css';

const Weather = props => {
    return (
        <div className={styles.weather}>
            <div className={styles.temp}>{props.temp}</div>
            <div className={styles.climate}>{props.climate}</div>
            <div className={styles.wind}>{props.windspeed}</div>
        </div>
    );
};

export default Weather;