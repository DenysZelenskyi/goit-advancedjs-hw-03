import SimpleLightbox from "simplelightbox";

import { fetchImages } from './js/pixabay-api';
import { createGalleryCardTemplate, displayGallery, displayError, displayWarning } from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

let lightbox = new SimpleLightbox('.js-gallery a');

const onSearchFormSubmit = e => {
  e.preventDefault();

  const searchedValue = e.target.elements.user_query.value.trim();

  if (!searchedValue) {
    displayError('Please enter a search query.');
    return;
  }

  loaderEl.classList.remove('is-hidden');
  
  fetchImages(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        displayWarning('Sorry, there are no images matching your search query. Please try again!');
      } else {
        const galleryMarkup = data.hits.map(createGalleryCardTemplate).join('');
        displayGallery(galleryMarkup, galleryEl, lightbox);
      }
    })
    .catch(err => {
      displayError(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
