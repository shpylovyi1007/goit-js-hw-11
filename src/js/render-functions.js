import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');

const addImages = images => {
    const galleryList = images.map(image =>
        `< li class="gallery-item" >
            <a class="gallery-link" href=${image.largeImageURL}>
                <img
                    class="gallery-image"
                    url=${image.webformatURL}
                    alt=${image.tags}
                    <b>Likes</b>: ${image.likes}
                    <b>Views</b>: ${image.views}
                    <b>Comments</b>: ${image.comments}
                    <b>Downloads</b>: ${image.downloads}
                /></a></li >`
    ).join('');
    gallery.insertAdjacentHTML('beforeend', galleryList);

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
};

export default addImages;