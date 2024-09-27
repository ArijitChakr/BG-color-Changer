const allbtns = document.querySelectorAll(".btn");
const formEl = document.querySelector("form");
const colorbtn = document.getElementById("colors");
const newColor = document.getElementById("new-color");

function renderColor() {
  allbtns.forEach((btn) => {
    const colorbtn =
      btn.textContent[0].toLowerCase() + btn.textContent.slice(1);
    btn.style.backgroundColor = colorbtn;

    btn.addEventListener("click", function () {
      if (colorbtn === "default")
        document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.backgroundColor = colorbtn;

      if (btn.textContent === "Black") {
        btn.style.border = "1px solid white";
        document.querySelector(".color-container").style.borderRight =
          "1px solid white";
        document.querySelector("h1").style.color = "white";
      } else {
        btn.style.border = "1px solid black";
        document.querySelector(".color-container").style.borderRight =
          "1px solid black";
        document.querySelector("h1").style.color = "black";
      }
    });
  });
}
renderColor();

formEl.addEventListener("submit", function (e) {
  let colorButtonValue = colorbtn.value;
  let newColorValue = newColor.value.toLowerCase();
  e.preventDefault();
  console.log(colorButtonValue, newColorValue);
  let btnName = document.querySelector(`.btn-${colorButtonValue}`);
  btnName.classList.add(`btn-${newColorValue}`);
  btnName.textContent = newColorValue[0].toUpperCase() + newColorValue.slice(1);
  renderColor();
  btnName.classList.remove(`btn-${colorButtonValue}`);
});
