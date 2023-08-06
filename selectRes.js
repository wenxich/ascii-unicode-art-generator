let selectRes = function (p) {
  p.setup = function () {
    p.noCanvas();
    resMenu = p.createSelect();
    resMenu.option("50 x 50");
    resMenu.option("100 x 100");
    resMenu.option("250 x 250");
    resMenu.option("500 x 500");
    resMenu.option("1000 x 1000");
    resMenu.selected("250 x 250");
    resMenu.changed(() => {
      switch (resMenu.value()) {
        case "50 x 50":
          p5genImg.resizeCanvas(50, 50);
          break;
        case "100 x 100":
          p5genImg.resizeCanvas(100, 100);
          break;
        case "250 x 250":
          p5genImg.resizeCanvas(250, 250);
          break;
        case "500 x 500":
          p5genImg.resizeCanvas(500, 500);
          break;
        case "1000 x 1000":
          p5genImg.resizeCanvas(1000, 1000);
          break;
      }
    });
  };
};

let p5selectRes = new p5(selectRes, document.getElementById("selectRes"));
