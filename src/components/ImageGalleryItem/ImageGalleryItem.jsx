import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css'


export default class ImageGalleryItem extends Component {
    render() {
        const { id, webformatURL } = this.props;

        // don forget to add largeImageURL, onGettingIms 

        return (
            <li className={css.ImageGalleryItem} key={id}>
                <img
                    className={css.ImageGalleryItem__Image}
                    src={webformatURL}
                    alt={id}
                />
            </li>    
    )}      
    
}    
