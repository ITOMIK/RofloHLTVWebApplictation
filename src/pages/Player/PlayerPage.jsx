import React, {  useState } from 'react';
import { useParams  } from 'react-router-dom';
import styles from './PlayerPage.module.css';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import Separator from '../../components/Separator/Separator';
import StatsDisplay from '../../components/StatsDisplay/StatsDisplay';
import StatsFortniteDisplay from '../../components/StatsFortnieDisplay/StatsFortniteDisplay';

const PlayerPage = ()=> {

    const { playerId } = useParams();

    const [selectedGame, setSelectedGame] = useState('');
    return (
        <div className={styles.page} key={playerId}>
            <PlayerHeader selectedGame={selectedGame} setSelectedGame={setSelectedGame} playerId={playerId}/>
            <Separator />
            {selectedGame=="Valorant" ?<StatsDisplay  playerId={playerId} discipline={"Valorant"}/>:null}
            {selectedGame=="CS:GO"?<StatsDisplay  playerId={playerId} discipline={"CS:GO"}/>:null}
            {selectedGame=='Fortnite'?<StatsFortniteDisplay playerId={playerId}/>: null}
        </div>
    );
}

export default PlayerPage;
