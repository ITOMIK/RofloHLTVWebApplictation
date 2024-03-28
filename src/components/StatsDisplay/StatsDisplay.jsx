import React from 'react';
import styles from './StatsDisplay.module.css';
import getValorantName from '../../data/getValorantName.jsx';
import getCsgoName from '../../data/getCsgoName.jsx';
import getStatValorant from '../../data/getStatValorant.jsx';
import getStatCsgo from '../../data/getStatCsgo.jsx';
import { useQuery } from '@tanstack/react-query';
import service from '../../services/main.service.js';
//import PlayerInfo from '../../store/PlayerInfo.js';
//import selectedGame from '../../store/selectedGame.js';

function updateData(obj) {
    if (!obj) return {};
    return {
        ...obj,
        kills: (obj.kills / obj.maps).toFixed(1),
        deads: (obj.deads / obj.maps).toFixed(1),
        assists: (obj.assists / obj.maps).toFixed(1),
        fk: (obj.fk / obj.maps).toFixed(1),
        fd: (obj.fd / obj.maps).toFixed(1)
    };
}

const StatsDisplay = ({discipline, playerId}) => {
    let getName = discipline==="Valorant"? getValorantName: getCsgoName;
    let getStat = discipline==="Valorant"? getStatValorant: getStatCsgo;
    const { isLoading, data: playerData } = useQuery({
        queryKey: [`${discipline}PlayerStats`],
        queryFn: () => service.getAll(),
        select: ({data}) => {
            if(discipline==="Valorant") return updateData(data[0].valorantPlayers.find(p=>p.id===+playerId))
            if(discipline==="CS:GO") return updateData(data[0].csgoPlayers.find(p=>p.id===+playerId))
            return null
        },
    });

    return (
        <div className={styles.display}>
            {isLoading? (
                <div>Загрузка...</div>
            ) : (
                <div>
                    <div className={styles.stat}>
                        <span>Teams: </span>
                        {playerData?.teams.map((team, index) => (
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
            )}
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
