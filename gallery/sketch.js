var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var triX = r.width/2;
var triY = 100;
var triSize = 570;

function random(arr) {
  return arr[Math.floor(Rune.random(arr.length))];
}

function drawTriangle() {
  r.stage.children = [];

  // Draw bg
  r.rect(0, 0, r.width, r.height).fill(0).stroke(false)

  // draw triangle
  var split = random(["top", "center", "rows", "rows"]);

  if(split == "top") {
    var third = triSize/3;
    r.triangle(triX, triY, triX + (triSize/2), triY + triSize, triX - (triSize/2) + (third * 2), triY + triSize);
    r.triangle(triX, triY, triX - (triSize/2) + (third * 2), triY + triSize, triX - (triSize/2) + third, triY + triSize);
    r.triangle(triX, triY, triX - (triSize/2) + third, triY + triSize, triX - (triSize/2), triY + triSize);
  } else if(split == "center") {
    var midY = triY + (triSize * 0.66);
    var midX = (triSize/2) * 0.5;
    r.triangle(triX, triY, triX, midY, triX + midX, triY + (triSize * 0.5))
    r.triangle(triX, midY, triX + midX, triY + (triSize * 0.5), triX + (triSize/2), triY + triSize)
    r.triangle(triX, midY, triX + (triSize/2), triY + triSize, triX, triY + triSize)
    r.triangle(triX, triY, triX, midY, triX - midX, triY + (triSize * 0.5))
    r.triangle(triX, midY, triX - midX, triY + (triSize * 0.5), triX - (triSize/2), triY + triSize)
    r.triangle(triX, midY, triX - (triSize/2), triY + triSize, triX, triY + triSize)
  } else if(split == "rows") {
    var num = Math.floor(Rune.random(2, 6));
    var s = triSize / num;
    for(var i = 0; i < num; i++) {
      for(var j = 0; j < i + (i+1); j++) {
        var x = triX - (i*(s/2)) + (j * (s/2));
        var y = triY + (i*s);
        var tri = r.triangle(x, y, x + (s/2), y + s, x - (s/2), y + s);
        if(j % 2 == 1) {
          tri.rotate(180, x, y + (s/2))
        }
      }
    }
  }

  // colors
  var numColors = Math.floor(Rune.random(2, 8));
  var hue = Rune.random(360);
  var sat = Rune.random(40, 90);
  var bri = Rune.random(60, 100);
  var hueChange = Rune.random(10, 90);
  var satChange = random([0, Rune.random(-40, 40)]);
  var briChange = random([0, Rune.random(-40, 40)]);
  var colors = [];
  for(var i = 0; i < numColors; i++) {
    var h = hue + (i*hueChange);
    var s = sat + (i*satChange);
    var b = bri + (i*briChange);
    colors.push(new Rune.Color('hsv', h, s, b));
  }

  for(var i = 1; i < r.stage.children.length; i++) {
    var color = colors[(i - 1) % colors.length];
    r.stage.children[i].fill(color).stroke(color);
  }

  r.draw();
}

drawTriangle();
setInterval(drawTriangle, 2000);
