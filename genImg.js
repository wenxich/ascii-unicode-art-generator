/** generated image **/
/** default img credit the blowup on Unsplash (https://unsplash.com/photos/LJ5OlrbOllU) **/

let genImg = function (p) {
  let photo;
  p.preload = function () {
    photo = p.loadImage("photo.jpg");
  };
  p.setup = function () {
    p.createCanvas(250, 250);
    // startBtn = p.createButton("start draw loop");
    // stopBtn = p.createButton("stop draw loop");
    // startBtn.mousePressed(() => p.loop());
    // stopBtn.mousePressed(() => p.noLoop());
  };
  p.draw = function () {
    p.frameRate(5);
    p.background(255);
    let w = p.width / photo.width;
    let h = p.height / photo.height;

    if (uploadedImg === undefined || uploadedImg === null) {
      photo.loadPixels();
    } else {
      photo = uploadedImg;
      photo.loadPixels();
    }

    for (let j = 0; j < photo.height; j++) {
      for (let i = 0; i < photo.width; i++) {
        const pixelIndex = (i + j * photo.width) * 4;
        const r = photo.pixels[pixelIndex + 0];
        const g = photo.pixels[pixelIndex + 1];
        const b = photo.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;

        p.noStroke();
        p.fill(0);

        const charIndex = p.floor(p.map(avg, 0, 255, startDir, endDir));
        p.textSize(w);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      }
    }
  };
};

let p5genImg = new p5(genImg, document.getElementById("genImg"));

/** copy art text **/

let copyText = function (p) {
  let photo;
  p.preload = function () {
    photo = p.loadImage("photo.jpg");
  };
  p.setup = function () {
    p.noCanvas();
    genBtn = p.createButton("generate text");
    genBtn.mousePressed(genText);
  };
  let genText = function () {
    if (uploadedImg === undefined || uploadedImg === null) {
      photo.loadPixels();
    } else {
      photo = uploadedImg;
      photo.loadPixels();
    }
    let copyOut = "";
    for (let j = 0; j < photo.height; j++) {
      for (let i = 0; i < photo.width; i++) {
        const pixelIndex = (i + j * photo.width) * 4;
        const r = photo.pixels[pixelIndex + 0];
        const g = photo.pixels[pixelIndex + 1];
        const b = photo.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;

        const len = density.length;
        const charIndex = p.floor(p.map(avg, 0, 255, startDir, endDir));
        if (density.charAt(charIndex) == "") {
          copyOut += "&nbsp;";
        } else {
          copyOut += density.charAt(charIndex);
        }
      }
      copyOut += "\n";
    }
    document.getElementById("textOut").innerHTML = copyOut;
  };
};

let p5copyText = new p5(copyText, document.getElementById("copyText"));
