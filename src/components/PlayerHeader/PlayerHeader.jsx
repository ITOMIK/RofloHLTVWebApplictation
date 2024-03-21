
import styles from './PlayerHeader.module.css';
import getCountryFlagUrl from '../../data/getCountryFlag';

function PlayerHeader({user,setSelectedGame,selectedGame}) {
    let avatar = "/defaultAvatar.jpg";
    return(
<div className={styles.header}>
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
                            {user.links.valorantTracker? <li><a href={user.links.valorantTracker}>Valorant Tracker</a></li>: null}
                            {user.links.steam? <li><a href={user.links.steam}>Steam</a></li>: null}
                            {user.links.fortniteTracker?<li><a href={user.links.fortniteTracker}>Fortnite Tracker</a></li>: null}
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
            </div>
            );
}

export default PlayerHeader;

                            