const load = document.querySelector(".load");
const wrapper = document.getElementById("wrapper");

const bannerForm = document.querySelector(".banner-right");
window.addEventListener("load", function () {
  bannerForm.classList.add("banner-active");
  wrapper.classList.add("warpper-active");
  setTimeout(function addLoad() {
    load.classList.add("load-active");
  }, 2000);
});
//  End banner

const featuresItem = document.getElementsByClassName("features-item-content");
window.addEventListener("scroll", function () {
  const x = this.pageYOffset;

  for (let i = 0; i < workItem.length; i++) {
    if (x > 6100) {
      featuresItem[i].classList.add("features-active");
    }
  }
});

// End features
const contactForm = document.querySelector(".contact-form");
window.addEventListener("scroll", function () {
  const x = this.pageYOffset;
  if (x > 8200) {
    contactForm.classList.add("contact-form-active");
  }
});

// End form
const pricingForm = document.querySelectorAll(".pricing-form");

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;
  if (x > 6800) {
    for (let i = 0; i < pricingForm.length; i++) {
      pricingForm[i].classList.add("pricing-form-active");
    }
  }
});
// End pricing
const item = document.getElementsByClassName("testimonials-right-item");

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
//End testimonials
const workItem = document.getElementsByClassName("work-item-imgs");

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;

  for (let i = 0; i < workItem.length; i++) {
    if (x > 3800) {
      workItem[i].classList.add("work-active");
    }
  }
});

// End work
