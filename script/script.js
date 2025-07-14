window.addEventListener('load', () => {
  const pictures = document.querySelectorAll('picture[data-hover]');

  pictures.forEach(picture => {
    const img = picture.querySelector('img');
    const originalSrc = img.getAttribute('src');
    const hoverSrc = picture.getAttribute('data-hover');
    const sources = picture.querySelectorAll('source');
    const originalSrcsets = [];
    const hoverSrcsets = [];
    const source = sources[0];

    sources.forEach((source, index) => {
      originalSrcsets.push(source.getAttribute('srcset'));
      hoverSrcsets.push(source.getAttribute('data-hover'));
    });



    picture.addEventListener('mouseenter', () => {
      img.setAttribute('src', hoverSrc);
      sources.forEach((source, index) => {
        if (hoverSrcsets[index]) {
          source.setAttribute('srcset', hoverSrcsets[index]);
        }
      });
    });

    picture.addEventListener('mouseleave', () => {
      img.setAttribute('src', originalSrc);
      sources.forEach((source, index) => {
        if (originalSrcsets[index]) {
          source.setAttribute('srcset', originalSrcsets[index]);
        }
      });
    });

    picture.addEventListener('focusin', () => {
      img.setAttribute('src', hoverSrc);
      sources.forEach((source, index) => {
        if (hoverSrcsets[index]) {
          source.setAttribute('srcset', hoverSrcsets[index]);
        }
      });
    });

    picture.addEventListener('focusout', () => {
      img.setAttribute('src', originalSrc);
      sources.forEach((source, index) => {
        if (originalSrcsets[index]) {
          source.setAttribute('srcset', originalSrcsets[index]);
        }
      });
    });
  });

  const dateElement = document.getElementById('footer-date');

  if (dateElement) {
    setInterval(() => {
      const dateTime = new Date();
      dateElement.dateTime = dateTime.toISOString();
      dateElement.textContent = dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
    }, 500);
  }


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

