// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hidden');
    }
  });
});
const hiddenItems = document.querySelectorAll(".scroll-fade-in");
hiddenItems.forEach((item) => observer.observe(item));
