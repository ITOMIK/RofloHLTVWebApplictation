import { useMemo } from "react";
import styles from './MatchResult.module.css';
function MatchResult({event}){
    const _event = useMemo(()=>event,[event])
    return(
        <><div className={styles.result}>
            <div className={styles.winner}>
                <img src={_event.itog.winnerLogo} alt={_event.itog.winner} />
                <span className={styles.score}>{_event.itog.score}</span>
            </div>
            <div className={styles.looser}>
                <img src={_event.itog.looserLogo} alt={_event.itog.looser} />
            </div>
        </div>
        <div className={styles.maps}>
                {_event.maps.map((map, index) => (
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
}

export default MatchResult;