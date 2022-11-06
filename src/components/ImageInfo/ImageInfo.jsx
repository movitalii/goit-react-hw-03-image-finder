import { Component } from 'react';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
// import css from './ImageInfo.module.css';

export default class ImageInfo extends Component {
    state = {
        images: null,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imageName !== this.props.imageName) {
            console.log('Name is changed');

            this.setState({ status: 'pending' });

            fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=30062649-6c95f8a5f26546f2640c7031e&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => { 
                    if (response.ok) {
                        return response.json();
                    }
                    
                    return Promise.reject(
                        new Error(`Did not find ${this.props.imageName}`)                        
                    );
                })
                .then(data => {
                    const images = data.hits;
                    this.setState({ images, status: 'resolved' })
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { images, error, status } = this.state;

        if (status === 'idle') {
            return <div>Type your request</div>;
        }

        if (status === 'pending') {
            return (
                <>
                    <Loader/>
                </>
            )
        }

        if (status === 'rejected') {            
            return (
                <>
                    <ImageErrorView message={error.message} />
                </>                
            );
        }

        if (status === 'resolved') {
            return (
                <>
                    <ImageGallery images={ images } />
                </>
        );
        };                
    }
}