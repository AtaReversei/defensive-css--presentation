const root = document.documentElement;
const slide_num = document.querySelectorAll("section");

let index = 0;

root.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && index > 0 && window.pageYOffset === 0) {
    index -= 1;
    root.style.setProperty("--percentage", index * -100 + "%");
  }
  if (
    e.key === "ArrowRight" &&
    index < slide_num.length - 1 &&
    window.pageYOffset === 0
  ) {
    index += 1;
    root.style.setProperty("--percentage", index * -100 + "%");
  }
});
