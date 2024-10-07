function drawShip(x, y, hullColor) {
  //body
  ctx.fillStyle = hullColor;
  ctx.beginPath();
  ctx.moveTo(x, y + 440);
  ctx.lineTo(x + 100, y + 440);
  ctx.lineTo(x + 80, y + 470);
  ctx.lineTo(x + 20, y + 470);
  // ctx.closePath();
  ctx.fill();

  //pole
  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(x + 50, y + 440);
  ctx.lineTo(x + 60, y + 440);
  ctx.lineTo(x + 60, y + 410);
  ctx.lineTo(x + 50, y + 410);
  // ctx.closePath();
  ctx.fill();

  //sail
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(x + 5, y + 380);
  ctx.lineTo(x + 60, y + 380);
  ctx.lineTo(x + 60, y + 410);
  ctx.lineTo(x + 5, y + 410);
  // ctx.closePath();
  ctx.fill();
}

function drawFish(x, y, r, color, color2) {
  //fish
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.lineTo(x + 200, y + 520);
  ctx.lineTo(x + 220, y + 540);
  ctx.lineTo(x + 200, y + 560);
  ctx.lineTo(x + 200, y + 520);
  ctx.fill();

  //fish body
  ctx.fillStyle = color2;
  ctx.beginPath();
  ctx.arc(x + 225, y + 540, r + 10, 0, 2 * Math.PI);
  ctx.fill();
}

function clouds(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 3.14, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + 30, y, r - 10, 3.14, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x - 30, y, r - 10, 3.14, 2 * Math.PI);
  ctx.fill();
}

function drawSun() {
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(90, 70, 40, 0, 2 * Math.PI);
  ctx.fill();
}

function drawMoon() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(430, 60, 40, 0, 2 * Math.PI);
  ctx.fill();
}

function land() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, 450);
  ctx.lineTo(140, 350);
  ctx.lineTo(200, 390);
  ctx.lineTo(350, 380);
  ctx.lineTo(500, 450);
  ctx.lineTo(0, 450);
  ctx.fill();
}
