document.addEventListener("DOMContentLoaded", function () {
  fetchImageUrls().then(function (imageUrls) {
    populateCarousel(imageUrls);
  }).catch(function (error) {
    console.error('Error fetching image URLs:', error);
  });
});

function fetchImageUrls() {
  return new Promise(function (resolve, reject) {
    const imageUrls = [
      "public/img-events/QIQC6890.jpeg",
      "public/img-events/QIQC7018.jpeg",
      "public/img-events/VNL_0675.jpeg",
      "public/img-events/QIQC7311.jpeg",
      "public/img-events/QIQC7062.jpeg",
      "public/img-events/VNL_0044.jpeg",
      "public/img-events/VNL_0110.jpeg",
      "public/img-events/QIQC7334.jpeg",
      "public/img-events/QIQC7214.jpeg",
      "public/img-events/VNL_0363.jpeg",
      "public/img-events/VNL_0421.jpeg",
      "public/img-events/VNL_0506.jpeg",
    ];
    resolve(imageUrls);
  });
}

function populateCarousel(imageUrls) {
  const carouselInner = document.querySelector('.carousel-inner');

  imageUrls.forEach(function (imageUrl, index) {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    if (index === 0) {
      carouselItem.classList.add('active'); // first item as active
    }

    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('d-block', 'w-100');

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });
}