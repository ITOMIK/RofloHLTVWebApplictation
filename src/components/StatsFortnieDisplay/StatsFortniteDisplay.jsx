import styles from './StatsFortniteDisplay.module.css';
import Separator from '../Separator/Separator';
import { Link} from 'react-router-dom';

function StatsFortniteDisplay({events, playerData}) {
    return(
<div className={styles.summary}>
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
            <p>Команда: {event.members.map((player, index) => (
                <Link  to={`/players/${player.id}`}>{player.name} </Link>
            ))}</p>
        </div>
    </div>
))}
</div>
    );
}

export default StatsFortniteDisplay;