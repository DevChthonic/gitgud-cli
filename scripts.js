// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // Optional scroll animation for sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".features li, .cta").forEach((el) => {
    el.classList.add("fade-in-init");
    observer.observe(el);
  });
});

