import React from 'react';
import styles from './Valorant.module.css'
import data from '../../data/data';
import BestPlayers from '../../components/BestPlayers/BestPlayers';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import EventsBlock from '../../components/EventBlock/EventBlock';

const ValorantPage = () => {

    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
                <EventsBlock  events={data.valorantEvents} discipline={"Valorant"}/>
                <BestPlayers stats={data.valorantPlayers} discipline={"Valorant"} users={data.players}/>
            </div>
        </div>

    );
};

export default ValorantPage;