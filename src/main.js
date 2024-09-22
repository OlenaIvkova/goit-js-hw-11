// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './pixabay-api.js';
import { renderGallery, clearGallery, showLoader, hideLoader, showNoImagesMessage } from './render-functions.js';


let currentPage = 1;
const form = document.querySelector('#search-form');
const input = form.querySelector('input');
const loadMoreButton = document.querySelector('.load-more');
let gallery = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    currentPage = 1;
    loadMoreButton.classList.add('hidden');

    try {
        showLoader();
        const data = await fetchImages(query, currentPage);

        if (data.hits.length === 0) {
            showNoImagesMessage();
        } else {
            renderGallery(data.hits);
            gallery.refresh();
            if (data.hits.length > 0 && data.totalHits > currentPage * 12) {
                loadMoreButton.classList.remove('hidden');
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});

loadMoreButton.addEventListener('click', async () => {
    const query = input.value.trim();
    currentPage += 1;

    try {
        showLoader();
        const data = await fetchImages(query, currentPage);
        renderGallery(data.hits);
        gallery.refresh();

        if (data.hits.length < 12 || currentPage * 12 >= data.totalHits) {
            loadMoreButton.classList.add('hidden');
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch more images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});