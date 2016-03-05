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

// Draw bg
r.rect(0, 0, r.width, r.height).fill(0).stroke(false)

// draw triangle
var split = "rows"//random(["top", "center", "rows"]);

r.triangle(triX, triY, triX + (triSize/2), triY + triSize, triX - (triSize/2), triY + triSize)
  .fill(255, 0, 0)

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




r.draw();
