import React from 'react';
import styles from './Home.module.css'
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import EventsBlock from '../../components/EventBlock/EventBlock';
import FortniteEventBlock from '../../components/FortniteEvetBlock/FortniteEventBlock';

const HomePage = () => {
    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
            <EventsBlock discipline={"Valorant"}  />
                <EventsBlock discipline={"Csgo"}  />
                <FortniteEventBlock />
            </div>
        </div>

    );
};

export default HomePage;