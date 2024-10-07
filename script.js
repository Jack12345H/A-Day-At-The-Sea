/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// sky
function colorDay() {
  ctx.fillStyle = "rgb(135, 206, 235)";
  ctx.fillRect(0, 0, 500, 450);
}

function colorNight() {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, 500, 450);
}

//water
ctx.fillStyle = "blue";
ctx.fillRect(0, 450, 500, 300);

// ctx.drawFish(x1, y1);
// function circle() {
//   ctx.fillstyle = "yellow";
//   ctx.beginPath();
//   ctx.arc(20, 20, 10, 0, 2 * Math.PI);
//   ctx.fill();
// }

let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
let spot = Math.random() * 70;
let size = Math.random() * 30;

let time = prompt("Daytime or night-time?");

if (time === "day") {
  colorDay();
  drawSun();
} else if (time === "night") {
  colorNight();
  drawMoon();
}

let weather = prompt("Is it cloudy today?");
if (weather === "yes") {
  clouds(spot + 200, spot + 120, 30, `rgb(${r}, ${g}, ${b})`);

  clouds(spot + 70, spot + 230, 40, `rgb(${r - 20}, ${g + 10}, ${b - 100})`);

  clouds(spot + 320, spot + 180, 35, `rgb(${r - 100}, ${g + 40}, ${b + 50})`);
} else if (weather === "no") {
  console.log("no");
}

land();

drawShip(spot, spot - 10, `rgb(${r}, ${g}, ${b})`);

drawShip(spot + 210, spot - 10, `rgb(${r + 70}, ${g - 120}, ${b + 80})`);

drawFish(0, 10, 4, `rgb(${r - 10}, ${g + 90}, ${b + 30})`);

drawFish(90, 30, 8, `rgb(${r + 80}, ${g - 40}, ${b - 50})`);

drawFish(-110, 20, 10, `rgb(${r - 70}, ${g - 50}, ${b + 70})`);
