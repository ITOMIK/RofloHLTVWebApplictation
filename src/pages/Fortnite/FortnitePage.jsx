import React from 'react';
import styles from './Fortnite.module.css'
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import BestPlayers from '../../components/BestPlayers/BestPlayers';
import FortniteEventBlock from '../../components/FortniteEvetBlock/FortniteEventBlock';

const FortnitePage = () => {
    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
            <FortniteEventBlock />
            <BestPlayers  discipline={"Fortnite"} /> 
            </div>
        </div>

    );
};

export default FortnitePage;