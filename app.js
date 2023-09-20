const fadeInItems = document.querySelectorAll('.fade-in');

fadeInItems.forEach((item) => {
  
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
        }
  });
});

const hiddenItems = document.querySelectorAll('.scroll-fade-in');
hiddenItems.forEach((item) => observer.observe(item));