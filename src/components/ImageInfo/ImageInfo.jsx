import { Component } from 'react';
import css from './ImageInfo.module.css';

export default class ImageInfo extends Component {
    state = {
        images: null,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imageName !== this.props.imageName) {
            console.log('Name is changed');

            fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=30062649-6c95f8a5f26546f2640c7031e&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(images => this.setState({ images }));
        }
    }

    render() {
        return (
            <div>
                <h1>ImageInfo</h1> 
                <p>{ this.props.imageName }</p>
            </div>
        )            
    }
}