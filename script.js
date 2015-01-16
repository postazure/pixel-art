var paper = document.getElementById("paper");
var body = document.getElementsByClassName("container")[0];
var penColor = "red";

createGrid(16,16);
createPen();
updatePen(penColor);
createPalette();

function createGrid(width, height) {
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      createPixel(paper);
    };
    var line_break = document.createElement("DIV");
    paper.appendChild(line_break);
  };
};

function createPixel() {
  var pixel = document.createElement("DIV");
  pixel.setAttribute("class","pixel")
  pixel.onclick = function () {
    this.style.backgroundColor = penColor;
  };
  paper.appendChild(pixel);
};

function createPalette() {
  var palette = document.createElement("DIV");
  palette.setAttribute("class", "palette");
  palette.style.display = "inline-block";
  palette.style.marginTop = "1px";
  body.appendChild(palette);

  createColor("#d3d3d3",palette);
  createColor("white",palette);
  createColor("red",palette);

  var line_break = document.createElement("DIV");
  palette.appendChild(line_break);

  createColor("blue",palette);
  createColor("green",palette);
  createColor("yellow",palette);
}

function createPen() {
  var pen = document.createElement("DIV");
  pen.setAttribute("class","pen");
  body.appendChild(pen);
}

function updatePen(colorName) {
  penColor = colorName;
  pen = document.body.getElementsByClassName("pen")[0];
  pen.style.backgroundColor = colorName;
}

function createColor(colorName, palette) {
  var color = document.createElement("DIV");
  color.setAttribute("class","pixel")
  color.style.backgroundColor = colorName;
  color.onclick = function () {
    updatePen(colorName);
  };
  palette.appendChild(color);
};
