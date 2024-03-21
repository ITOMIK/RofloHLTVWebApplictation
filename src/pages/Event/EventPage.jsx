import React, { useState,useEffect  } from 'react';
import { useParams,Link,useNavigate  } from 'react-router-dom';
import data from '../../data/data';
import MatchResult from '../../components/MatchResult/MatchResult'
import styles from './Event.module.css';
import PlayersStats from '../../components/PlayersStats/PlayersStats';

function CsgoPage() {


    const { matchId, discipline } = useParams();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(true);

    const [event, setEvent] = React.useState({});


    useEffect(() => {
        if (matchId && discipline) {
            setIsLoading(true);
            let e = null;
            if(discipline==="Csgo"){
            e = data.csgoEvents.find(e=> e.id===+matchId);
            }
            else{
            e = data.valorantEvents.find(e=> e.id===+matchId);
            }
            console.log(e);
            setEvent(e? e:{});
            setIsLoading(false);
        }
        
    }, [matchId]);






    if(isLoading){
        return (
            <div>Загрузка...</div>
        );
    }
    return (

        <div className={styles.match}>
                <h1 align="center">{event.name}</h1>
                <h3 align="center">{event.date}</h3>
                    <MatchResult event ={event} />
                    <div className={styles.stat}>
                        <PlayersStats TeamFlag={true} users={data.players} event={event} discipline={discipline}/>
                        <PlayersStats TeamFlag={false} users={data.players} event={event} discipline={discipline}/>
                    </div>
                
        </div>
    );
}




export default CsgoPage;
