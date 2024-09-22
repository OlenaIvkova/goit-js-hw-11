export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(image => {
        return `
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b>: ${image.likes}</p>
          <p><b>Views</b>: ${image.views}</p>
          <p><b>Comments</b>: ${image.comments}</p>
          <p><b>Downloads</b>: ${image.downloads}</p>
        </div>
      </a>`;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
    document.querySelector('.loader').classList.remove('visible');
}

export function showNoImagesMessage() {
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
    });
}