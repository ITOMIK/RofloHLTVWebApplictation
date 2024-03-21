import React, { useEffect, useMemo, useState } from 'react';
import styles from './NewsBlock.module.css';
import Sep from '../Separator/Separator';
import data from '../../data/data';
const NewsBlock = () => {
    const [news,setNews] = useState([]);

    useEffect(() => {
        setNews(data.news);
    }, [news]);

    const memoizedNews = useMemo(() => news, [news]);

       return (
        <div className={styles.block}>
            <h2>Последние Новости</h2>
            <Sep />
            {memoizedNews.map(n => (
                <div key={n}>
                    <p>{n}</p>
                    <Sep />
                </div>


          ))}
        </div>
    );
}

export default NewsBlock;