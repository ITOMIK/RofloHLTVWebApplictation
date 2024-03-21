import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link to={`/`}><h1 className={styles.logo}>RofloHLTV</h1></Link>
                <nav className={styles.navigation}>
                    <ul className={styles.links}>

                        <li><Link to={`/`}>Главная</Link></li>
                        <li><Link to={`/CSGO`}>CS:GO</Link></li>
                        <li><Link to={`/Valorant`}>Valorant</Link></li>
                        <li><Link to={`/Fortnite`}>Fortnite</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;