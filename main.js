const canvas = document.getElementById("myCanvas"); // storing a reference to the <canvas> element to the canvas variable
const ctx = canvas.getContext("2d"); // ctx variable to store the 2D rendering context

ctx.beginPath();
ctx.rect(20, 40, 50, 50); // defining a rectangle
ctx.fillStyle = "#a8e5d2"; // stores a color
ctx.fill(); // paints the square
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();