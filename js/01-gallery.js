import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

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

galleryList.addEventListener('click', itemsShow);

function itemsShow(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const soursData = e.target.getAttribute('data-source');

  // // Через querySelector - null
  // const soursData = e.target.querySelector('data-source');
  // console.log(srcData);

  const instance = basicLightbox.create(`
      <img src=${soursData} >
  `);

  instance.show();
}
