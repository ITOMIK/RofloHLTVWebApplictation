import React, { useState,useEffect  } from 'react';
import { useParams,Link,useNavigate  } from 'react-router-dom';
import styles from './PlayerPage.module.css';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import Separator from '../../components/Separator/Separator';
import data from '../../data/data';
import StatsDisplay from '../../components/StatsDisplay/StatsDisplay';
import StatsFortniteDisplay from '../../components/StatsFortnieDisplay/StatsFortniteDisplay';



function PlayerPage() {

    const { playerId } = useParams();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(true);

    const [user, setUser] = React.useState({});

    const [playerVal, setPlayerVal] = React.useState({});

    const [playerCsgo, setPlayerCsgo] = React.useState({});
    const [playerFortnite, setPlayerFortnite] = React.useState({});

    const [selectedGame, setSelectedGame] = useState('');

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            updateKillsWithDeath(playerCsgo);
            updateKillsWithDeath(playerVal);
        }
    }, [isLoading]);

    function updateKillsWithDeath(obj) {
        if(!obj || isChanged) return null
        else{
            console.log(obj.kills);
            obj.kills = obj.kills/obj.maps;
            obj.kills = obj.kills.toFixed(1)
            obj.deads = obj.deads/obj.maps;
            obj.deads = obj.deads.toFixed(1)
            obj.assists = obj.assists/obj.maps;
            obj.assists = obj.assists.toFixed(1)
            obj.fk = obj.fk/obj.maps;
            obj.fk = obj.fk.toFixed(1)
            obj.fd = obj.fd/obj.maps;
            obj.fd = obj.fd.toFixed(1)
            setIsChanged(true);
        }
    }

   useEffect(()=>{
    if(playerId){
        let ID = +playerId;
        let u = data.players.find(u=> u.id===ID);
        setUser(u? u: {});
        let v = data.valorantPlayers.find(u=> u.id===ID);
        setPlayerVal(v?v:null);
        let c =data.csgoPlayers.find(u=> u.id===ID);
        setPlayerCsgo(c? c:null);
        let f = data.fortnitePlayers.find(u=> u.id===ID);
        setPlayerFortnite(f? f:null);
        setSelectedGame(u.games[0]);
        setIsLoading(false);
    }
   },[playerId]);

    if(isLoading ){
        return (
            <div>Загрузка...</div>
        );
    }
   

    return (
        <div className={styles.page}>
            <PlayerHeader user={user} setSelectedGame={setSelectedGame} selectedGame={selectedGame}/>
            <Separator />
            {(selectedGame=="Valorant" && playerVal!=null)?<StatsDisplay discipline={selectedGame} playerData={playerVal}/>:null}
            {selectedGame=="CS:GO"&& playerCsgo!=null?<StatsDisplay discipline={selectedGame} playerData={playerCsgo}/>:null}
            {selectedGame=='Fortnite' && playerFortnite!=null?<StatsFortniteDisplay events={data.fortniteEvents} playerData={playerFortnite}/>: null}
        </div>
    );
}




export default PlayerPage;
