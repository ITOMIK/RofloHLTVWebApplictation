import React from 'react';
import styles from './FortniteEventBlock.module.css';
import Separator from '../Separator/Separator';
import { useQuery } from '@tanstack/react-query';
import mainService from '../../services/main.service';

const EventsBlock = () => {

    const { isLoading, data: events } = useQuery({
        queryKey: [`fortnitePlayers`],
        queryFn: () => mainService.getAll(),
        select: ({ data }) => data[0].fortniteEvents
            
    });

    return (
        <div className={styles.block}>
            <h2>Fortnite Events</h2>
            <Separator />
            <ul>
                {isLoading? <div>Загрузка...</div>:
                events.sort((a, b) => {
                    const dateA = new Date(a.date.split("-").reverse().join("-"));
                    const dateB = new Date(b.date.split("-").reverse().join("-"));
                    return dateB - dateA;
                }).map((event, index) => (
                    <li key={index}>
                        <div className={styles.item}>
                            <img src={event.logo} alt={event.name} className={styles.logo}/>
                            <div className={styles.details}>
                                <h3>{event.name}</h3>
                                <p>Date: {event.date}</p>
                            </div>
                        </div>
                        <Separator />
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default EventsBlock;