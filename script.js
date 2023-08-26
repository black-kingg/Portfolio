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

const hamburger = document.getElementById("hamburger");
const navContent = document.getElementById("navContent");

hamburger.addEventListener("click", function () {
  if (navContent.style.display === "none") {
    navContent.style.display = "block";
  } else {
    navContent.style.display = "none";
  }
});
