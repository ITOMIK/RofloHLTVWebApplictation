import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; 2024 RofloHLTV. Все права защищены.</p>
                <ul className={styles.links}>
                        <li><Link to={`/`}>Главная</Link></li>
                        <li><Link to={`/CSGO`}>CS:GO</Link></li>
                        <li><Link to={`/Valorant`}>Valorant</Link></li>
                        <li><Link to={`/Fortnite`}>Fortnite</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;