import styles from './StatsFortniteDisplay.module.css';
import Separator from '../Separator/Separator';
import {Link} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import service from '../../services/main.service.js';

function StatsFortniteDisplay({playerId}) {
    const { isLoading: isLoadingFortnite, data: playerData} = useQuery({
        queryKey: ['fortniteEventsStats'],
        queryFn: () => service.getAll(),
        select: ({data}) => data[0].fortnitePlayers.find(p=>p.id===+playerId),
    },
    );
    const { isLoading: isLoadingFortniteEvents, data: events } = useQuery({
        queryKey: ['fortnitePlayerStats'],
        queryFn: () => service.getAll(),
        select: ({data}) => data[0].fortniteEvents,
    },
    );
    return(
<div className={styles.summary}>
    {isLoadingFortnite || isLoadingFortniteEvents? <div>Загрузка...</div>:
    <>
<h2>Power Points: {playerData.pr}</h2>
<Separator />
<h2>Fortnite Events</h2>
{events?.filter(event => event.members.find(m => m.id === playerData.id)).sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB - dateA;
}).map((event, index) => (
    <div key={index} className={styles.tournament}>
        <img src={event.logo} alt={event.name} className={styles.logo} />
        <div className={styles.info}>
            <h3>{event.name}</h3>
            <p>Дата: {event.date}</p>
            <p>Место: #{event.place}</p>
            <p>Количество убийств: {event.kills}</p>
            <p>Среднее место: {event.avgPlace}</p>
            <p>Команда: {event.members.map((player) => (
                <Link key={player.id}  to={`/players/${player.id}`}>{player.name} </Link>
            ))}</p>
        </div>
    </div>
))}
</>}
</div>
    );
}

export default StatsFortniteDisplay;