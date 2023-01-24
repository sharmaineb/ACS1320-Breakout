/* eslint-disable max-classes-per-file */
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
const objectColor = '#0095DD';
const gameOverMessage = 'Game Over';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Ball {
  constructor(x = 0, y = 0, dx = 2, dy = -1, radius = 10, color = '#ff6f69') {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

class Brick {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.status = 1;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Bricks
// creating array of bricks
class Bricks {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.init();
  }

  init() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricksbricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        this.bricksbricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight, objectColor);
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < brickColumnCount; c += 1) {
      for (let r = 0; r < brickRowCount; r += 1) {
        const brick = bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

const bricks = new Bricks(brickColumnCount, brickRowCount);

// Paddle

// Score

// Lives

// Game

const ball = new Ball(0, 0, 2, -2, ballRadius, objectColor);

// Variables
let paddleX;

// eslint-disable-next-line no-use-before-define
resetBallAndPaddle();

let score = 0;
let lives = 3;

let rightPressed = false;
let leftPressed = false;

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

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = objectColor; // * Could be good as a constant
  ctx.fill();
  ctx.closePath();
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
  ball.render(ctx);
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
