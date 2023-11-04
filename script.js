const hTag = document.querySelector("#h1");
const about = document.querySelector("#about");

const h2Tag = document.querySelector("#h2");
const work = document.querySelector("#work");

const h3Tag = document.querySelector("#h3");
const contact = document.querySelector("#contact");

hTag.onmouseover = function () {
  hTag.innerHTML = `${about.textContent}`;

  hTag.addEventListener("click", () => {
    location.href = "/about.html";
  });
};
hTag.onmouseout = function () {
  hTag.innerHTML = `Hello.`;
};

h2Tag.onmouseover = function () {
  h2Tag.innerHTML = `${work.textContent}`;

  h2Tag.addEventListener("click", () => {
    location.href = "/work.html";
  });
};
h2Tag.onmouseout = function () {
  h2Tag.innerHTML = `I am`;
};

h3Tag.onmouseover = function () {
  h3Tag.innerHTML = `${contact.textContent}`;

  h3Tag.addEventListener("click", () => {
    location.href = "/contact.html";
  });
};
h3Tag.onmouseout = function () {
  h3Tag.innerHTML = `Muiz`;
};

gsap.from(`.h1`, { duration: 1, y: `100%`, ease: `power2.inOut` });
gsap.from(`.h2`, { duration: 2, y: `100%`, ease: "expoScale(0.5,7,none)" });
gsap.from(`.h3`, { duration: 3, y: `100%` });
