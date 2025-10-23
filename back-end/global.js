// ===== MOBILE NAVBAR TOGGLE =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("open");
});

// ===== SCROLL ANIMATION =====
const fadeElements = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right, .scale-up"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // smooth & one-time
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => observer.observe(el));