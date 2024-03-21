import styles from './StatsDisplay.module.css';
import getValorantName from '../../data/getValorantName.jsx';
import getCsgoName from '../../data/getCsgoName.jsx';
import getStatValorant from '../../data/getStatValorant.jsx';
import getStatCsgo from '../../data/getStatCsgo.jsx';

const StatsDisplay = ({playerData, discipline}) => {
    let getName = discipline==="Valorant"? getValorantName: getCsgoName;
    let getStat = discipline==="Valorant"? getStatValorant: getStatCsgo;
    return (
<div className={styles.display}>
                    <div className={styles.stat}>
                        <span>Teams: </span>
                        {playerData.teams.map((team, index) => (
                            <span key={index}>{team} </span>
                        ))}
                    </div>
                    <h2>{discipline} Statistic:</h2>
                    <div className={styles.container}>
                        {Object.keys(playerData)?.map((stat) => (
                            (stat === "id" || stat === "teams" || stat =="name") ? null : (
                                <div className={styles.stat} key={stat}>
                                    <span>{getName(stat)} :</span>
                                    {renderIndicator(stat!="clutches"?playerData[stat]:Object.keys(playerData[stat]).length, {red: getStat(stat)[0], yellow: getStat(stat)[1]}, getStat(stat)[2],getStat(stat)[3])}
                                </div>
                            )
                        ))}
                    </div>
                </div>
    );
}

const renderIndicator = (value, thresholds, reverse = false, proc=false) => {

    let color = '';
    let p = proc ? '%':'';

    if (value < thresholds.red) {
        color = reverse ? 'green' : 'red';
    } else if (value >= thresholds.red && value < thresholds.yellow && !reverse) {
        color = 'yellow';
    } else {
        color = reverse ? 'red' : 'green';
    }

    return <span className={`${styles.indicator} ${styles[color]}`}>{value+p}</span>;
};

export default StatsDisplay;
