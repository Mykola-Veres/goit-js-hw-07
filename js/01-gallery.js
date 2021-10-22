import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryImage = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const markup = galleryItems.map(img =>
`<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join('');
  galleryImage.innerHTML = markup
};
addGallery(galleryItems);

galleryImage.addEventListener("click", handlerGallery);

function handlerGallery (event) {
  event.preventDefault();
  const filterDatasetImg = event.target.dataset.source;
  if (!filterDatasetImg) return;

const instance = basicLightbox.create(`
<img width="1280" height="860" src="${filterDatasetImg}">`,{
  onShow: instance => console.log('onShow', instance.element()),
  onClose: instance => console.log('onClose', instance.element())
});
instance.show();

galleryImage.addEventListener("keydown", handlerRemove); 
function handlerRemove (event) {
  if (event.code === "Escape") {
    instance.close(() => galleryImage.removeEventListener("keydown", handlerRemove))}
}};
