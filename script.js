window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.classList.toggle("window-scrolled", window.scrollY > 0);
  }
});

gsap.fromTo(
  ".header_right",
  { x: -2 },
  { x: 2, repeat: -1, yoyo: true, ease: "power1.out" }
);

const navLinks = document.querySelectorAll(".nav_links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navToggle = document.getElementById("nav-toggle");
    navToggle.checked = false;
  });
});
