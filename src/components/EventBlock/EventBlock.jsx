import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Event.module.css';
import Separator from '../Separator/Separator';

const EventsBlock = ({ discipline, events }) => {

    return (
        <div className={styles.block}>
            <h2>{discipline.toUpperCase()} Events</h2>
            <Separator />
            {events.map((event, index) => (
                <div key={index} style={{marginTop: "20px"}} className={styles.Event}>
                    <Link to={`/Event/${discipline}/${event.id}`}>
                    <div className={styles.EventName}>
                        <img src={event.itog.winnerLogo} alt={event.itog.winner} style={{marginRight: "2px"}}/>
                        <span>{event.itog.winner}</span>
                    </div>
                    <span className={styles.VS}>VS</span>
                    <div className={styles.EventName}>
                        <img src={event.itog.looserLogo} alt={event.itog.looser} style={{marginRight: "2px"}}/>
                        <span>{event.itog.looser}</span>
                    </div>

                    <ul>
                        {event.maps.map((map, mapIndex) => (
                            <li key={mapIndex}>
                                {map.name}: <span style={{ color: map.winner === event.itog.winner ? 'green' : 'red' }}>
                                {map.winner === event.itog.winner ? map.score.split("-")[0]: map.score.split("-")[1]}</span> - <span style={{ color: map.looser === event.itog.looser ? 'red' : 'green' }}>
                                {map.looser === event.itog.looser ? map.score.split("-")[1]: map.score.split("-")[0]}</span>
                            </li>
                        ))}
                    </ul>
                    <div  className={styles.result}>
                        <img src={event.itog.winnerLogo} alt={event.itog.winner} style={{marginRight: "2px"}}/>
                        <span className={styles.score}>{event.itog.score}</span>
                        <img src={event.itog.looserLogo} alt={event.itog.looser} style={{marginRight: "2px"}}/>
                    </div>
                    <Separator />
                    </Link>
                </div>

            ))}
        </div>
    );
}

export default EventsBlock;