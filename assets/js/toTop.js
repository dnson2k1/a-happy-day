const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;

  if (x > 200) {
    toTop.classList.add("toTop-active");
  } else {
    toTop.classList.remove("toTop-active");
  }
});
