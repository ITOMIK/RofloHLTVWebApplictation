import styles from './MatchResult.module.css';
import EventInfo from "../../store/EventInfo";
import { observer } from "mobx-react-lite";
const MatchResult = observer(()=>{
    const event = EventInfo.event;
    return(
        <><div className={styles.result}>
            <div className={styles.winner}>
                <img src={event?.itog.winnerLogo} alt={event?.itog.winner} />
                <span className={styles.score}>{event?.itog.score}</span>
            </div>
            <div className={styles.looser}>
                <img src={event?.itog.looserLogo} alt={event?.itog.looser} />
            </div>
        </div>
        <div className={styles.maps}>
                {event?.maps.map((map, index) => (
                    <div key={index} className={styles.map}>
                        <h2>{map.name}</h2>
                        <p>Score:
                            <span style={{ color: 'green' }}>{map.score.split("-")[0]}</span>-
                            <span style={{ color: 'red' }}>{map.score.split("-")[1]}</span>
                        </p>
                        <p>Winner: {map.winner}</p>
                    </div>
                ))}
            </div></>
        );
})

export default MatchResult;