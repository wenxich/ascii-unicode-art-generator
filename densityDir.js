let startDir = 0;
let endDir = density.length;

let densityDir = function (p) {
  p.setup = function () {
    p.noCanvas();
    direction = p.createSelect();
    direction.option("darkest -> brightest");
    direction.option("brightest -> darkest");
    direction.selected("darkest -> brightest");
    direction.changed(() => {
      if (direction.value() === "darkest -> brightest") {
        startDir = 0;
        endDir = density.length;
      } else {
        startDir = density.length;
        endDir = 0;
      }
    })
  };
};

let p5densityDir = new p5(densityDir, document.getElementById("densityDir"));