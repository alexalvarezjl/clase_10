// Declaramos un array con las rutas a las imágenes que queremos mostrar en el slider y en la galería
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
];

// Declaramos una variable para llevar un registro de la imagen que se está mostrando en ese momento en el slider
let currentImageIndex = 0;

// Obtenemos una referencia al elemento <img> del slider y le asignamos la primera imagen del array como fuente
const imgElement = document.querySelector('.img');
imgElement.src = images[currentImageIndex];

// Obtenemos una referencia al botón "anterior" y le asignamos un manejador de eventos para el evento "click"
const prevButton = document.querySelector('#prev-button');
prevButton.addEventListener('click', () => {
  // Cuando se haga clic en el botón "anterior", disminuimos el valor de "currentImageIndex" en 1
  currentImageIndex--;
  // Si "currentImageIndex" es menor a 0, lo cambiamos al último índice del array "images"
  if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  }
  // Actualizamos la fuente del elemento <img> del slider con la imagen correspondiente
  imgElement.src = images[currentImageIndex];
});

// Obtenemos una referencia al botón "siguiente" y le asignamos un manejador de eventos para el evento "click"
const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', () => {
  // Cuando se haga clic en el botón "siguiente", aumentamos el valor de "currentImageIndex" en 1
  currentImageIndex++;
  // Si "currentImageIndex" es mayor o igual al número de imágenes en el array "images", lo cambiamos a 0
  if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  }
   // Actualizamos la fuente del elemento <img> del slider con la imagen correspondiente
   imgElement.src = images[currentImageIndex];
});

// Obtenemos referencias a los elementos <img> de la galería y les asignamos las imágenes correspondientes como fuentes
const galleryImages = document.querySelectorAll('.gallery-container .img');
for (let i = 0; i < galleryImages.length; i++) {
   galleryImages[i].src = images[i];
}

// Obtenemos referencias a los contenedores del slider y de la galería
const galleryContainer = document.querySelector('.gallery-container');
const imageSlider = document.querySelector('.image-slider');

// Obtenemos una referencia al botón para alternar entre la vista de galería y la vista de slider
const toggleViewButton = document.querySelector('#toggle-view-button');

// Declaramos una variable para llevar un registro del estado actual (galería o slider)
let isGalleryView = false;

// Asignamos un manejador de eventos para el evento "click" en el botón para alternar entre la vista de galería y la vista de slider
toggleViewButton.addEventListener('click', () => {
   // Cambiamos el valor de "isGalleryView" cada vez que se haga clic en el botón
   isGalleryView = !isGalleryView;

   // Si estamos en la vista de galería...
   if (isGalleryView) {
       // Mostramos el contenedor de la galería y ocultamos el contenedor del slider
       galleryContainer.style.display = 'block';
       imageSlider.style.display = 'none';
       // Actualizamos el texto del botón
       toggleViewButton.textContent = 'Ver vista deslizador de imágenes';
   } else { // Si estamos en la vista de slider...
       // Mostramos el contenedor del slider y ocultamos el contenedor de la galería
       galleryContainer.style.display = 'none';
       imageSlider.style.display = 'flex';
       // Actualizamos el texto del botón
       toggleViewButton.textContent = 'Ver vista galería de imágenes';
   }
});
