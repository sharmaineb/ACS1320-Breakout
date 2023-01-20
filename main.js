/* eslint-disable no-alert */
// stores a reference to the <canvas> element to the canvas variable
// ctx variable to store the 2D rendering context
// DOM references
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Constants
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const paddleXStart = (canvas.width - paddleWidth) / 2;
const PI2 = Math.PI * 2;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Ball {
  constructor(x, y, dx, dy, radius) {
    this.x = 0;
    this.y = 0;
    this.dx = 2;
    this.dy = -2;
    this.radius = 10;
  }
}

const ball = new Ball(1, 2, 3, 4, 10);

// Variables
let paddleX;

// eslint-disable-next-line no-use-before-define
resetBallAndPaddle();

let score = 0;
let lives = 3;

let rightPressed = false;
let leftPressed = false;

// Setup Bricks Array
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1,
    };
  }
}

// Functions
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

// handler function that updates the paddle position based on the pointer coordinates
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// custom background
function drawBackground() {
  // create a linear gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  // add color stops
  gradient.addColorStop(0, '#D16BA5');
  gradient.addColorStop(0.5, '#86A8E7');
  gradient.addColorStop(1, '#5FFBF1');
  // set the fill style & draw and fill the background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, PI2);
  ctx.fillStyle = '#ff6f69';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#ffcc5c';
  ctx.fill();
  ctx.closePath();
}

// function to loop through all the bricks in the array and draw them on the screen
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = '#96ceb4';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// create & update the score display
function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

// function that will loop through all the bricks and compare every single brick's position with
// the ball's coordinates as each frame is drawn
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        if (
          ball.x > brick.x
          && ball.x < brick.x + brickWidth
          && ball.y > brick.y
          && ball.y < brick.y + brickHeight
        ) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function resetBallAndPaddle() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 3;
  ball.dy = -3;
  paddleX = paddleXStart;
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function movePaddle() {
  // Check for arrow keys
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
}

function collisionsWithCanvasAndPaddle() {
  // Bounce the ball off the left and right of the canvas
  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  // Bounce the ball of the top, paddle, or hit the bottom of the canvas
  if (ball.y + ball.dy < ballRadius) {
    // hit the top
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    // hit the bottom
    if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
      // hit the paddle
      ball.dy = -ball.dy;
    } else {
      // lose a life
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        resetBallAndPaddle();
      }
    }
  }
}

// Game Loop
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Call helper functions
  drawBackground();
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  moveBall();
  movePaddle();
  collisionsWithCanvasAndPaddle();

  // Draw the screen again
  requestAnimationFrame(draw);
}

// Register Event Listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// Starts program at entry point
draw();
