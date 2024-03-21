import React from 'react';
import { Link } from 'react-router-dom';
import Separator from '../Separator/Separator';
import styles from './BestPlayers.module.css'
import getCountryFlagUrl from '../../data/getCountryFlag';
const obj ={
    "Valorant": [199,250,"acs"],
    "Csgo":[0.99,1.09,"raiting"],
    "Fortnite":[12,15,"pr"]
}
let hight = null;
let low = null;

const avatar = '/defaultAvatar.jpg';

const PlayersBlock = ({ stats, discipline,users }) => {
    hight = obj[discipline][1];
   low = obj[discipline][0];
    

    return (
        <div className={styles.block}>
            <h2>Best Players</h2>
            <Separator />
            <ul>
                {stats.sort((a, b) => {
                    return b.raiting - a.raiting;
                }).map((stat, index) => (
                    <li key={index}>
                        <Link to={`/players/${users.find(u => u.id === stat.id).id}`}>
                        <div className={styles.items}>
                            <img src={users.find(u=> u.id===stat.id).avatar? users.find(u=> u.id===stat.id).avatar: avatar} className={styles.logo}/>
                            <div className={styles.details}>
                                <div className={styles.name}>
                                <h3>{users.find(u=> u.id===stat.id).name}</h3>
                                <img   className={styles.flag} src={getCountryFlagUrl(users.find(u=> u.id===stat.id).country)}  />
                                </div>

                                <span>{discipline === "Csgo" ? "Rating: " : discipline === "Valorant" ? "ACS: " : "Power Rating: "} <span style={{ color: getIndicator(stat[obj[discipline][2]]) }}>{stat[obj[discipline][2]]}</span></span>
                            </div>
                        </div>
                        <Separator />
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );

}
const getIndicator =(r)=>{
    if(r>hight)
        return 'green';
    if(r>=low)
        return 'yellow';
    return 'red';
}


export default PlayersBlock;