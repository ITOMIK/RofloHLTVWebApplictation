import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Fortnite.module.css'
import data from '../../data/data';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import BestPlayers from '../../components/BestPlayers/BestPlayers';
import FortniteEventBlock from '../../components/FortniteEvetBlock/FortniteEventBlock';

const FortnitePage = () => {
    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
            <FortniteEventBlock events={data.fortniteEvents}/>
            <BestPlayers stats={data.fortnitePlayers} discipline={"Fortnite"} users={data.players}/> 
            </div>
        </div>

    );
};

export default FortnitePage;