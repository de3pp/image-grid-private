window.addEventListener('load', () => {

  const images = document.querySelectorAll('img[data-hover]');

  images.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseenter', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = originalSrc;
    });
  });

});
