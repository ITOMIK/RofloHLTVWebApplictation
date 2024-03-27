import React, { useState,useEffect } from 'react';
import styles from './NewsBlock.module.css';
import Sep from '../Separator/Separator';
import { useQuery } from '@tanstack/react-query';
import service from '../../services/main.service';

const NewsBlock = () => {

    const { isLoading, data: news } = useQuery({
        queryKey: ['news'],
        queryFn: () => service.getAll(),
        select: ({data}) => data[0].news,
    },
    );


    if (isLoading ) {
        return (
            <div>Загрузка</div>
        )
    }


    return (
        <div className={styles.block}>
            <h2>Последние Новости</h2>
            <Sep />
            {isLoading? <div>Загрузка...</div>:
            news.map((n, index) => (
                <div key={index}>
                    <p>{n}</p>
                    <Sep />
                </div>
            ))}
        </div>
    );
}

export default NewsBlock;