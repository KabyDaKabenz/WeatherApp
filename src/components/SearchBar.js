import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if(query.trim().length === 0) return;
        props.onSearch(query);
    }

    const queryChangeHandler = event => {
        setQuery(event.target.value);
    }


    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <input type={props.inputType} value={query} onChange={queryChangeHandler}/>
            <button type={props.buttonType}>Search</button>
        </form>
    );
};

export default SearchBar;