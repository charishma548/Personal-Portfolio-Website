const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Scroll animation logic
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => appearOnScroll.observe(fader));