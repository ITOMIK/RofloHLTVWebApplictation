import React, { useEffect  } from 'react';
import { useParams  } from 'react-router-dom';
import styles from './PlayerPage.module.css';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import Separator from '../../components/Separator/Separator';
import StatsDisplay from '../../components/StatsDisplay/StatsDisplay';
import StatsFortniteDisplay from '../../components/StatsFortnieDisplay/StatsFortniteDisplay';
import PlayerInfo from '../../store/PlayerInfo';
import selectedGame from '../../store/selectedGame';
import { observer } from 'mobx-react-lite';


const PlayerPage = observer(()=> {

    const { playerId } = useParams();
    useEffect(() => {
        PlayerInfo.setId(+playerId);
    }, [playerId]);
    return (
        <div className={styles.page} key={playerId}>
            <PlayerHeader />
            <Separator />
            {selectedGame.selectedGame=="Valorant" ?<StatsDisplay  />:null}
            {selectedGame.selectedGame=="CS:GO"?<StatsDisplay  />:null}
            {selectedGame.selectedGame=='Fortnite'?<StatsFortniteDisplay/>: null}
        </div>
    );
})




export default PlayerPage;
