"use strict";

const btnScrollTo = document.querySelector("#w1");
const btnScrollTo1 = document.querySelector("#f1");
const btnScrollTo2 = document.querySelector("#f2");
const btnScrollTo3 = document.querySelector("#f3");
const btnScrollTo4 = document.querySelector("#f4");
const btnScrollTo5 = document.querySelector("#f5");
const btnScrollTo6 = document.querySelector("#f6");

const section0 = document.querySelector("#f3");
const section1 = document.querySelector("#hr0");
const section2 = document.querySelector("#hrr1");
const section3 = document.querySelector("#hrr2");
const section4 = document.querySelector("#hrr3");
const section5 = document.querySelector("#hrr4");
const section6 = document.querySelector("#hrr5");
const section7 = document.querySelector("#hrr6");

btnScrollTo.addEventListener("click", function (e) {
  section0.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo1.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo2.addEventListener("click", function (e) {
  section2.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo3.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo4.addEventListener("click", function (e) {
  section4.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo5.addEventListener("click", function (e) {
  section5.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo6.addEventListener("click", function (e) {
  section6.scrollIntoView({ behavior: "smooth" });
});

const allSections = document.querySelectorAll(
  ".flex-container1, .flex-container2, .ff2"
);

const revealSection = function (entries, observer) {
  const [enrty] = entries;
  console.log(enrty);
  if (!enrty.isIntersecting) return;
  enrty.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
