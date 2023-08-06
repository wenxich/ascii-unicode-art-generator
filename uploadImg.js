let uploadedImg;
let uploadImg = function (p) {
  let canvas;

  p.setup = function () {
    p.noCanvas();
    uploadBtn = p.createFileInput(handleFile);
  };
  let handleFile = function (file) {
    if (file.type === "image") {
      uploadedImg = p.createImg(file.data, "");
      uploadedImg.hide();
      let imgSrc = uploadedImg.attribute("src");
      uploadedImg = p.loadImage(imgSrc, () => {
        if (uploadedImg.width > 50) {
          uploadedImg.resize(50, 0);
        }
        if (uploadedImg.width != uploadedImg.height) {
          window.alert(
            "WARNING: Image chosen is not square and will be compressed into one."
          );
        }
      });
    } else {
      uploadedImg = null;
      window.alert("ERROR: Please choose an image file.");
    }
  };
};

let p5uploadImg = new p5(uploadImg, document.getElementById("customUpload"));
