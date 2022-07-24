import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
// добавляємо в розмітку
const list = galleryItems.map(
  g =>
    `
    <a class="gallery__item" href=${g.original}>
      <img
        class="gallery__image"
        src=${g.preview}
        title = ${g.description}
        alt=${g.description}
      />
    </a>
  `
);
galleryList.insertAdjacentHTML('afterbegin', list.join(''));

// ініціалізуємо SimpleLightbox , та додаємо опції відображення

let lightbox = new SimpleLightbox('.gallery a', {
  fadeSpeed: '250',
  scrollZoom: 'true',
  animationSpeed: '250',
});
