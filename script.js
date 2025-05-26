// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Scroll Reveal
ScrollReveal().reveal(".container", {
  duration: 1200,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease',
  reset: true
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
