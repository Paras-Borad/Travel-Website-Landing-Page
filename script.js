const slides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.darkcircal');
let activeIndex = 0;

function showTestimonial(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    indicators.forEach((dot, i) => {
        dot.src = i === index ? 'assets/darkcircal.svg' : 'assets/whitecircal.svg';
    });

    activeIndex = index;
}

// Auto-play every 2 seconds
setInterval(() => {
    let nextIndex = (activeIndex + 1) % slides.length; // loop back to 0 after last slide
    showTestimonial(nextIndex);
}, 5000); // 5000ms = 2 seconds

// Show first slide initially
showTestimonial(0);


const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });