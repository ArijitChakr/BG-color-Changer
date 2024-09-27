const allbtns = document.querySelectorAll(".btn");
const formEl = document.querySelector("form");
const colorButton = document.getElementById("colors");
const newColor = document.getElementById("new-color");
const optionCol = document.querySelectorAll("option");

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
  optionCol.forEach((opt, i) => {
    opt.value =
      allbtns[i].textContent[0].toLowerCase() + allbtns[i].textContent.slice(1);
    opt.textContent = allbtns[i].textContent;
  });
}
renderColor();

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let colorButtonValue = colorButton.value;
  let newColorValue = newColor.value.toLowerCase();

  if (checkActualColor(newColorValue) === false) {
    newColor.value = "";
    alert("Please enter proper color");
    renderColor();
    return;
  }
  let btnName = document.querySelector(`.btn-${colorButtonValue}`);
  btnName.classList.add(`btn-${newColorValue}`);
  btnName.textContent = newColorValue[0].toUpperCase() + newColorValue.slice(1);
  renderColor();
  btnName.classList.remove(`btn-${colorButtonValue}`);

  newColor.value = "";
});

function checkActualColor(col) {
  const st = new Option().style;
  st.color = col;

  return st.color === col;
}
