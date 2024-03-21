import styles from './PlayersStats.module.css';
import getCountryFlagUrl from '../../data/getCountryFlag';
import { Link  } from 'react-router-dom';
function PlayersStats({TeamFlag,users,event,discipline}){
    const team = TeamFlag? event.itog.winner : event.itog.looser;
   const avatar = '/defaultAvatar.jpg';
   const high = discipline==="Csgo"? 1.10: 250;
   const low = discipline==="Csgo"? 1: 199;
   const getIndicator =(r)=>{
    if(r>high)
        return 'green';
    if(r>=low)
        return 'yellow';
    return 'red';
};

    return(
        <div className={styles.stats} style={TeamFlag?null:{justifyItems: "end"}}>
                {event.data.filter(x=>x.team===team).map(player => (
                    <div key={player.id} className={styles.player}>
                        <Link  to={`/players/${users.find(u=> u.id===player.id).id}`}>
                        <div className={styles.header}>
                            <img  src={users.find(u=> u.id===player.id).avatar? users.find(u=> u.id===player.id).avatar: avatar} className={styles.logo} />
                            <h3>{users.find(u=> u.id===player.id).name}</h3>
                            <img   className={styles.flag} src={getCountryFlagUrl(users.find(u=> u.id===player.id).country)} style={{marginTop:"15px"}} />
                        </div>
                        <p>{discipline==="Csgo"? "raiting: " : "ACS: " }<span style={{ color: getIndicator(discipline==="Csgo"?player.raiting:player.acs) }}>{+(discipline==="Csgo"?player.raiting.toFixed(2):player.acs)}</span></p>
                        {discipline==="Csgo"?<span>K/D/A: {player.kill} / {player.death} / {player.assist} </span>:<span>K/D/A: {player.kills} / {player.deads} / {player.assists} </span>}
                        <p>ADR: {player.ADR} </p>
                        <span>First Kills: {player.fk} </span>
                        <span>First Deads: {player.fd}</span>
                        {discipline==="Csgo"?
                        <>
                        <p>Clutches:</p>
                        <span>
                                {Object.entries(player.clutches).map(([key, value]) => (
                                    <span key={key}>{key}: {value} </span>
                                ))}
                            </span>
                            </>
                            :null}
                        </Link>
                    </div>
                ))}
            </div>
    );
    
}



export default PlayersStats;