import React from 'react';
import styles from './Csgo.module.css'
import BestPlayers from '../../components/BestPlayers/BestPlayers';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import EventsBlock from '../../components/EventBlock/EventBlock';

const CsgoPage = () => {

    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
                <EventsBlock   discipline={"Csgo"}/>
                <BestPlayers  discipline={"Csgo"}/>
            </div>
        </div>

    );
};

export default CsgoPage;