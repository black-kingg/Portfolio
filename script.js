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

// portfolio
$(".gallery ul li a").click(function () {
  var itemID = $(this).attr("href");
  $(".gallery ul").addClass("item_open");
  $(itemID).addClass("item_open");
  return false;
});
$(".close").click(function () {
  $(".port, .gallery ul").removeClass("item_open");
  return false;
});

$(".gallery ul li a").click(function () {
  $("html, body").animate(
    {
      scrollTop: parseInt($("#top").offset().top),
    },
    400
  );
});
