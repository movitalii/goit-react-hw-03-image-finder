import React from 'react';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'

export default function ImageGallery({ gallery, onModalOpen }) {
    return (
        <ul className={css.ImageGallery}>
            {gallery.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onGettingIms={onModalOpen}
            />
            ))}
        </ul>
    );
};