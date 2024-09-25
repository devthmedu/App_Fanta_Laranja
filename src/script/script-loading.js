document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('img.lazy');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
});
