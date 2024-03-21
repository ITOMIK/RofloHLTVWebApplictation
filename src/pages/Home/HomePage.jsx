import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import data from '../../data/data';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import EventsBlock from '../../components/EventBlock/EventBlock';
import FortniteEventBlock from '../../components/FortniteEvetBlock/FortniteEventBlock';

const HomePage = () => {
    return (
        <div className={styles.page}>
            <NewsBlock />
            <div className={styles.sidebar}>
            <EventsBlock discipline={"Valorant"} events={data.valorantEvents} />
                <EventsBlock discipline={"Csgo"} events={data.csgoEvents} />
                <FortniteEventBlock events={data.fortniteEvents}/>
            </div>
        </div>

    );
};

export default HomePage;