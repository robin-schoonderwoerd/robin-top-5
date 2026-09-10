const elements = [
  document.querySelector("h1"),
  document.querySelector(".subtitle"),
  document.querySelector(".player-card")
];

elements.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add("fade-in");
  }, i * 180);
});
