import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

// добавляємо днамічно  елменти масиву в розмітку

const list = galleryItems.map(
  img =>
    `
  <div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
      />
    </a>
  </div>
  `
);
galleryList.insertAdjacentHTML('afterbegin', list.join(''));

// відкриття-закриття  картинки по кліку

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
