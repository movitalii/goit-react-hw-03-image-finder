import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css'


export default class ImageGalleryItem extends Component {
    render() {
        const { id, webformatURL, largeImageURL, onGettingIms } = this.props;

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
