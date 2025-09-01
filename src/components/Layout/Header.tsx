import React from 'react';
import styles from '../../styles/Header.module.css';
import logo from '../../images/photos/logo.png';
import iconSearch from '../../images/icons/iconSearch.svg';

function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <div className={styles.search}>
                <img src={iconSearch} className={styles.iconSearch} alt={iconSearch}/>
                <input className={styles.searchInput} type="search" placeholder="Search..."/>
            </div>
        </div>
    );
}

export default Header;
