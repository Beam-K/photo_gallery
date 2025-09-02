import React from 'react';
import styles from '../styles/PhotoCard.module.css';
import {Photo} from "../types"

interface Props {
    photo: Photo;
}


function PhotoCard({photo}: Props) {
    return (
        <div className={styles.photoCard}>
            <img src={photo.url} alt={photo.title}/>
            <div className={styles.descriptionCard}>
                <p className={styles.descriptionText}>
                    {photo.description}
                </p>
            </div>
        </div>
    );
}

export default PhotoCard;
