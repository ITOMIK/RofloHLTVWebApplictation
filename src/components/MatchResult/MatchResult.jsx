import styles from './MatchResult.module.css';
import EventInfo from "../../store/EventInfo";
import { observer } from "mobx-react-lite";
const str = " ";
const MatchResult = observer(()=>{
    const event = EventInfo.event;
    if(event?.type=="ShowMatch")
    return(
        <><div className={styles.result}>
                <img src={event?.itog.winnerLogo} alt={event?.itog.winner} className={styles.winner} />  
            <span className={styles.score}>{event?.itog.score}</span>
                <img src={event?.itog.looserLogo} alt={event?.itog.looser} className={styles.looser}/>
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
    
    if(event?.type=="Tournament")
        return(
            <><div className={styles.result}>
            <img src={event?.itog.teamLogo} alt={event?.itog.team} className={styles.winner} /> 
        <span className={styles.score}>{event?.itog.team} #{event?.itog.place}</span>
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