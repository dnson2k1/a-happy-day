const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;
  if (x >= 500) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
});
