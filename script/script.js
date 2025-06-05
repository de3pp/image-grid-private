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

    img.addEventListener('focusin', (event) => {
      img.src = hoverSrc;
    });

    img.addEventListener('focusout', (event) => {
      img.src = originalSrc;
    });
  });

  const dateElement = document.getElementById('footer-date');

  if (dateElement) {
    setInterval(() => {
      const dateTime = new Date();
      dateElement.dateTime = dateTime.toISOString();
      dateElement.textContent = dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
    }, 500);
  };


  const lightThemeToggle = document.getElementById('light');

  lightThemeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute('color-scheme', 'light');
    localStorage.setItem('theme', 'light');

  });

  const darkThemeToggle = document.getElementById('dark');

  darkThemeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark');
  });

  if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute('color-scheme', localStorage.getItem('theme'));
  }
});

