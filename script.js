// Toggle nav menu on mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("site-nav").classList.toggle("active");
});

// HERO SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 10000); // 10 seconds

function goToSelectedLevel() {
  const select = document.getElementById('level-select');
  const selectedLevel = select.value;
  if (selectedLevel && selectedLevel !== '-- Choose a Level --') {
    window.location.href = selectedLevel;
  } else {
    alert('Please select a level before starting the test.');
  }
}