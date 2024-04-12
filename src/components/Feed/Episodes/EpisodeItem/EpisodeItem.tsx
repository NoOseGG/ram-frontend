import React from 'react'

import styles from './EpisodeItem.module.scss';
import { IEpisode } from '../../../../interfaces/app.interface';

type Props = {
    episode: IEpisode;
}

const EpisodeItem: React.FC<Props> = ({ episode }) => {
    return (
        <div className={styles.container}>
            <div>{episode.id}</div>
            <div>{episode.name}</div>
            <div>{episode.episode}</div>
        </div>
    )
}

export { EpisodeItem }