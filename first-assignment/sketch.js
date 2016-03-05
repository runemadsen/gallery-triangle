var r = new Rune({
  container: "#canvas",
  width: $(window).width(),
  height: $(window).height(),
  // debug: true
});

//background
r.rect(0, 0, 500, 750).fill("hsv", 0, 100, 70);




var myGrid = r.grid({
x: 0,
y: 0,
width: 500,
height: 750,
gutter: 5,
columns: 3,
rows: 3,

});


var bigeye = r.path(50, r.height/2)
  .lineTo(0,0)
  .curveTo(100, -150, 300, -150, 400,0)
  .curveTo(300, 150,100, 150, 0, 0)
  .fill(250);

//eyelashes:
for (var i = 0; i < 11; i++){
var eyelash = bigeye.vectorAt(i /20);
r.rect(50+eyelash.x, 335 + eyelash.y,15, 50).fill(0);
}

var moveeye = (Rune.random(0.40*r.width, 0.60*r.width))

var eyeball = r.ellipse(moveeye, r.height/2, 160, 160)
.fill(0);

var pupile = r.ellipse(moveeye, r.height/2, 30, 30)
.fill(250);

// ------------

// SMALL EYES:

function drawModule(row, col, color) {
  for(var x = 0; x < myGrid.vars.moduleWidth; x += 50) {
    for(var y = 0; y < myGrid.vars.moduleHeight; y += 50) {
      var smalleye = r.path(x, y)
        .moveTo(x,y)
        .curveTo(x+5, y+10, x+25, y+10, x+35,y)
        .strokeWidth(3)
        .fill(false)

        // for (var i = 0; i < 4; i++){
        // var eyelashSmall = smalleye.vectorAt(i / 4);
        // r.rect(???????????).fill(0);
        // }

      //myGrid.add(smalleye, row, col)
    }
  }
}

    drawModule(1, 1);
    drawModule(1, 2);
    drawModule(1, 3);
    drawModule(2, 1);
    drawModule(2, 2);
    drawModule(2, 3);
    drawModule(3, 1);
    drawModule(3, 2);
    drawModule(3, 3);

  r.draw();
