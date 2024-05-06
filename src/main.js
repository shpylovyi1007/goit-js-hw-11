import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import userGallery from "./js/pixabay-api";
import addImages from "./js/render-functions";
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userSearch = event.target.elements.search.value.trim();
    userGallery(userSearch)
        .then(listImage => addImages(listImage))
        .catch(error => iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        })
        );
});
