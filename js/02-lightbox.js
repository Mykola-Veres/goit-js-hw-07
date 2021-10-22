import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImage = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const markup = galleryItems.map(img =>
`<a class="gallery__item" href="${img.original}">
<img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`).join('');
  galleryImage.innerHTML = markup
};
addGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
