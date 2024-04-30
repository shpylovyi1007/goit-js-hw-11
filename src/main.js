import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
import userGallery from "./js/pixabay-api";
import addImages from "./js/render-functions";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    userGallery()
        .then(images => addImages(amages))
        .catch(error => iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        })
        );
});