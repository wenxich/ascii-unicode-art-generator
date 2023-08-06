let radio;
const densityDefault = "墨黑深浅灰光白日口小一";
let density = densityDefault;

let densityMap = function (p) {
  p.setup = function () {
    p.noCanvas();
    radio = p.createRadio();
    radio.option("1", "<span class='graphicalRadio'></span>use default");
    radio.option("2", "<span class='graphicalRadio'></span>use your own");
    radio.style("display", "flex");
    radio.style("flex-direction", "column");
    radio.selected("1");
    userInput = p.createInput("");
    userInput.hide();
    radio.changed(() => {
      if (radio.value() === "1") {
        userInput.hide();
        userInput.value("");
        density = densityDefault;
        if (direction.value() === "darkest -> brightest") {
          startDir = 0;
          endDir = density.length;
        } else {
          startDir = density.length;
          endDir = 0;
        }
      } else {
        userInput.show();
      }
    });
    userInput.input(() => {
      if (radio.value() === "2" && userInput.value() != "") {
        density = userInput.value();
        if (direction.value() === "darkest -> brightest") {
          startDir = 0;
          endDir = density.length;
        } else {
          startDir = density.length;
          endDir = 0;
        }
      }
    });
  };
};

let p5densityMap = new p5(densityMap, document.getElementById("densityMap"));
