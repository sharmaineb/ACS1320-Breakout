const canvas = document.getElementById("myCanvas"); // storing a reference to the <canvas> element to the canvas variable
const ctx = canvas.getContext("2d"); // ctx variable to store the 2D rendering context

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 10);
