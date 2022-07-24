import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
// Добавляємо в розмітку
const list = galleryItems.map(
  g =>
    `
  <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src=${g.preview}
        data-source=${g.original}
        alt=${g.description}
      />
    </a>
  </div>
  `
);
galleryList.insertAdjacentHTML('afterbegin', list.join(''));

// відкриття-закриття  картинку по кліку
galleryList.addEventListener('click', itemsShow);

function itemsShow(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const soursDataImg = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
      <img src=${soursDataImg} >
  `);

  instance.show();

  // Закриття по Esc
  galleryList.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
