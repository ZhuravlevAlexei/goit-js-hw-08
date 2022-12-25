// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(SimpleLightbox);

let myGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }, idx) =>
      `<a class = "gallery__item" href = "${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}">
  </a>`
  )
  .join('');

myGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  //   captionPosition: "bottom", //default = "bottom"
  captionDelay: 250,
});
