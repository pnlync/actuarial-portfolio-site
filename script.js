const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(".reveal");

const updateHeader = () => {
  header.dataset.elevated = window.scrollY > 16 ? "true" : "false";
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => observer.observe(target));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
