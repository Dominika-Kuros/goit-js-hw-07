import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
 const markup = createItemsMarkup(galleryItems);
 gallery.insertAdjacentHTML("beforeend", markup);



 function createItemsMarkup(item) {
 return galleryItems
   .map(({ preview, original, description }) => {
     return `<div class="gallery__item">
 <a class="gallery__link" href="${original.value}">
 <img
 class="gallery__image"
 src="${preview}"
 data-source="${original}"
 alt="${description}"/></a></div>`;})
     .join("");
  
 }




 gallery.addEventListener('click', selectGalleryItem);

 function selectGalleryItem(event) {
     event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
         return;
     }

     const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,

         {
             onShow: () => {
                 window.addEventListener('keydown', onKeydownEsc);
             },
             onClose: () => {
                 window.removeEventListener('keydown', onKeydownEsc);
             },
         },
     );

 

     const onKeydownEsc = event => {
         console.log(event.code);
         if (event.code === 'Escape') {
            instance.close();
         }
     };
 

    instance.show();
 }