var r = new Rune({
  container: "#canvas",
  width: 700,
  height: 1000,
  debug: true
});

r.draw();

var letters = [
  [1, 0, 1],
  [0, 1, 0]
];

for(var i = 0; i < letters.length; i++) {

  var currentLetter = letters[i];

  if(currentLetter[0] == 1) {
    //r.line()
  }

  if(currentLetter[1] == 1) {
    // draw middle lines
  }

  if(currentLetter[2] == 1) {
    // draw bottom lines
  }

}
