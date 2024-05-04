import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');

const addImages = images => {
    gallery.innerHTML = '';
    const galleryList = images.map(image =>
        `<li class="gallery-item">
            <a class="gallery-link" href=${image.largeImageURL}>
                <img
                    url=${image.webformatURL}
                    alt=${image.tags}
                />
            </a>
                 <div>
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
                </li>`
    ).join('');
    gallery.insertAdjacentHTML('beforeend', galleryList);

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
};

export default addImages;
