
import styles from './PlayerHeader.module.css';
import getCountryFlagUrl from '../../data/getCountryFlag';
import mainService from '../../services/main.service';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const  PlayerHeader=({selectedGame, setSelectedGame, playerId})=> {
    const { isLoading, data: user } = useQuery({
        queryKey: ['playerInfo'],
        queryFn: () => mainService.getAll(),
        select: ({data}) => data[0].players.find(p=>p.id===+playerId),
    },
    );


    useEffect(() => {
        if (user && user.id === +playerId) { 
            setSelectedGame(user.games[0]);
            console.log(user);
        }
    }, [user]);
    
    const avatar = '/defaultAvatar.jpg';
    return(
<div className={styles.header}>
    {isLoading ? <div>Загрузка...</div>:
    <>  
                <img src={user.avatar?user.avatar :avatar} alt={user.name} className={styles.avatar} />
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h1>{user.name}</h1>
                        <img src={getCountryFlagUrl(user.country)} alt={user.country + " Flag"} className={styles.flag} />
                    </div>
                    <p>{user.realname}</p>

                    <div className={styles.links}>
                        <p>Links:</p>
                        <ul>
                            {user.links?.valorantTracker? <li><a href={user.links.valorantTracker}>Valorant Tracker</a></li>: null}
                            {user.links?.steam? <li><a href={user.links.steam}>Steam</a></li>: null}
                            {user.links?.fortniteTracker?<li><a href={user.links.fortniteTracker}>Fortnite Tracker</a></li>: null}
                        </ul>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            {user.games.map((game, index) => (
                                <li key={index} className={game === selectedGame ? 'selected' : ''}>
                                    <button onClick={() => setSelectedGame(game)}>{game} Stats</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </>
                }
            </div>
            );
}

export default PlayerHeader;

                            