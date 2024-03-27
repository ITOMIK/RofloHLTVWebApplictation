import React, { useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import MatchResult from '../../components/MatchResult/MatchResult'
import styles from './Event.module.css';
import PlayersStats from '../../components/PlayersStats/PlayersStats';
import EventInfo from '../../store/EventInfo';
import { useQuery } from '@tanstack/react-query';
import mainService from '../../services/main.service';
import { observer } from 'mobx-react-lite';

const  EventPage=observer(() =>{


    const { matchId, discipline } = useParams();

    const { isLoading, data: event } = useQuery({
        queryKey: [`${matchId}Event${discipline}`],
        queryFn: () => mainService.getAll(),
        select: ({data}) => {
            if(discipline==="Valorant") return data[0].valorantEvents.find(m=> m.id== +matchId);
            if(discipline==="Csgo") return data[0].csgoEvents.find(m=> m.id== +matchId);
        },
    },
    );
    useEffect(()=>{
       if(event){
        EventInfo.setData(event,discipline);
    }
    },[event])

    if(isLoading){
        return (
            <div className={styles.match}>
            <div>Загрузка...</div>
            </div>
        );
    }
    return (

        <div className={styles.match}>
                <h1 align="center">{event?.name}</h1>
                <h3 align="center">{event?.date}</h3>
                    <MatchResult  />
                    <div className={styles.stat}>
                        <PlayersStats TeamFlag={true} />
                        <PlayersStats TeamFlag={false} />
                    </div>
                
        </div>
    );
})




export default EventPage;
