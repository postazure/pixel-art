var paper = document.getElementById("paper");
var body = document.getElementsByClassName("container")[0];
var penColor = "black";

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
  pixel.style.backgroundColor = "d3d3d3";
  pixel.onclick = function () {
  console.log(this.style.backgroundColor)
  console.log(penColor)

    if (this.style.backgroundColor === penColor) {
      this.style.backgroundColor = "d3d3d3";
    }else {
      this.style.backgroundColor = penColor;
    };
  };
  paper.appendChild(pixel);
};

function createPalette() {
  var palette = document.createElement("DIV");
  palette.setAttribute("class", "palette");
  palette.style.display = "inline-block";
  palette.style.marginTop = "10px";
  body.appendChild(palette);

  createColor("rgb(127, 255, 0)",palette);
  createColor("rgb(118, 238, 0)",palette);
  createColor("rgb(102, 205, 0)",palette);
  createColor("rgb(69, 139, 0)",palette);
  createColor("rgb(173, 255, 47)",palette);
  createColor("rgb(202, 255, 112)",palette);
  createColor("rgb(188, 238, 104)",palette);
  createColor("rgb(162, 205, 90)",palette);
  createColor("rgb(110, 139, 61)",palette);
  createColor("rgb(85, 107, 47)",palette);
  createColor("rgb(107, 142, 35)",palette);
  createColor("rgb(192, 255, 62)",palette);
  createColor("rgb(179, 238, 58)",palette);
  createColor("rgb(154, 205, 50)",palette);
  lineBreak(palette);
  createColor("rgb(255, 200, 8)", palette);
  createColor("rgb(227, 189, 28)", palette);
  createColor("rgb(255, 228, 15)", palette);
  createColor("rgb(255, 216, 79)", palette);
  createColor("rgb(249, 238, 189)", palette);
  createColor("rgb(211, 227, 143)", palette);
  createColor("rgb(255, 203, 83)", palette);
  createColor("rgb(148, 133, 105)", palette);
  createColor("rgb(139, 117, 65)", palette);
  createColor("rgb(156, 13, 37)", palette);
  createColor("rgb(101, 91, 44)", palette);
  createColor("rgb(75, 63, 45)", palette);
  createColor("rgb(0, 0, 0)", palette);
  createColor("rgb(255, 255, 255)", palette);
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

function lineBreak(palette) {
  var line_break = document.createElement("DIV");
  palette.appendChild(line_break);
}
