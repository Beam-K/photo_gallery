import React from 'react';
import styles from '../../styles/Gallery.module.css';
import PhotoCard from '../PhotoCard'
import {Photo} from "../../types";


interface Props {
    photos: Photo[];
}

function Gallery({photos}: Props) {
    return (
        <div className={styles.gallery}>
            {photos.map((photo) => (
                <PhotoCard
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </div>
    );
}

export default Gallery;