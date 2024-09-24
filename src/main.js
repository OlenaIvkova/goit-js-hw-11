import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    if (!query) {
        return;
    }

    showLoader();
    fetchImages(query)
        .then(images => {
            renderImages(images);
            lightbox.refresh();
        })
        .catch(error => {
            console.error(error);
            iziToast.error({
                title: 'Error',
                message:
                    'An error occurred while fetching images. Please try again later.',
            });
        })
        .finally(() => {
            hideLoader();
        });
});