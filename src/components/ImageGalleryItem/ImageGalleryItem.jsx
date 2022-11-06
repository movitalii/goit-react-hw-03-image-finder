import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ images }) {
    return (
        <>
            {images.map(image =>(
                <li className={css.ImageGalleryItem} key={image.id}>
                    <img className={css.ImageGalleryItem__Image} src={image.webformatURL} alt={image.id} />
                </li>    
            ))}
        </>        
    )
}