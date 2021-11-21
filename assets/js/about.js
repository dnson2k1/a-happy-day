const abouts = [
  {
    colorIcon: "about-item-blue",
    name: "Google Analitycs",
    desc: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
  },
  {
    colorIcon: "about-item-red",
    name: "Brand Awareness",
    desc: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
  },
  {
    colorIcon: "about-item-green",
    name: "Graphic Design",
    desc: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
  },
];

const nameItems = document.querySelector(".about-items");

var html = "";
const items = abouts.map((item) => {
  return (html = `<div class="about-item">
    <span class="about-icon ${item.colorIcon}"
      ><i class="far fa-chart-bar"></i
    ></span>
    <h2 class="about-item-heading">${item.name}</h2>
    <p class="about-item-desc text-main">
      ${item.desc}
    </p>
  </div>`);
});
nameItems.innerHTML = items;
//////
const animateImg = document.querySelector(".about2-left-img");

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;

  if (x >= 1200) {
    animateImg.classList.add("about2-img-active");
  }
});

////
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const itemsAbout = $$(".about3-item");
const panesAbout = $$(".about3-right-img");

itemsAbout.forEach((item, index) => {
  const pane = panesAbout[index];

  item.onclick = function () {
    $(".about3-left-active").classList.remove("about3-left-active");
    $(".about3-right-active").classList.remove("about3-right-active");

    this.classList.add("about3-left-active");
    pane.classList.add("about3-right-active");
  };
});
//
const a = document.querySelector(".about4-a");
const b = document.querySelector(".about4-b");
const c = document.querySelector(".about4-c");
const d = document.querySelector(".about4-d");

var numberA = 0;
var numberB = 3;
var numberC = 1;
var numberD = 2;

window.addEventListener("scroll", function () {
  const x = this.pageYOffset;

  if (x > 2500) {
    var countDown = setInterval(function () {
      if (numberA < 1024) {
        numberA = numberA + 2;
        a.innerHTML = `${numberA}+`;
      }
      if (numberB < 270) {
        numberB++;
        b.innerHTML = `${numberB}k`;
      }
      if (numberC < 1210) {
        numberC = numberC + 3;
        c.innerHTML = `${numberC}`;
      }
      if (numberD < 2137) {
        numberD = numberD + 3;
        d.innerHTML = `${numberD}`;
      }
    }, 50);
  }
});
