/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Ball extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x = 0, y = 0, dx = 2, dy = -1, radius = 10, color = '#ff6f69') {\n    super(x, y, radius * 2, radius * 2, color);\n    this.dx = dx;\n    this.dy = dy;\n    this.radius = radius;\n    this.PI2 = Math.PI * 2;\n  }\n\n  move() {\n    this.moveBy(this.dx, this.dy);\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.PI2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout/./src/Ball.js?");

/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Brick extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height, color) {\n    super(x, y, width, height, color);\n\n    this.status = 1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout/./src/Brick.js?");

/***/ }),

/***/ "./src/Bricks.js":
/*!***********************!*\
  !*** ./src/Bricks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.js\");\n\n\nclass Bricks {\n  constructor({\n    cols,\n    rows,\n    width,\n    height,\n    padding,\n    offsetLeft,\n    offsetTop,\n    color,\n  }) {\n    this.cols = cols;\n    this.rows = rows;\n    this.bricks = [];\n    this.width = width;\n    this.height = height;\n    this.padding = padding;\n    this.offsetLeft = offsetLeft;\n    this.brickOffsetTop = offsetTop;\n    this.color = color;\n    this.init();\n  }\n\n  init() {\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brickX = c * (this.width + this.padding) + this.offsetLeft;\n        const brickY = r * (this.height + this.padding) + this.brickOffsetTop;\n        this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height, this.color);\n      }\n    }\n  }\n\n  render(ctx) {\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = this.bricks[c][r];\n        if (brick.status === 1) {\n          brick.render(ctx);\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://breakout/./src/Bricks.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.js\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLabel */ \"./src/GameLabel.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\n\n\n\nclass Game {\n  constructor(canvasId) {\n    this.canvas = document.getElementById(canvasId);\n    this.ctx = this.canvas.getContext('2d');\n\n    this.ballRadius = 10;\n    this.paddleHeight = 10;\n    this.paddleWidth = 75;\n    this.brickRowCount = 3;\n    this.brickColumnCount = 5;\n    this.brickWidth = 75;\n    this.brickHeight = 20;\n    this.brickPadding = 10;\n    this.brickOffsetTop = 30;\n    this.brickOffsetLeft = 30;\n    this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;\n    this.paddleYStart = this.canvas.height - this.paddleHeight;\n    this.objectColor = '#0095DD';\n    this.gameOverMessage = 'Game Over';\n\n    this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 2, -2, this.ballRadius, this.objectColor);\n    // eslint-disable-next-line no-undef\n    this.paddle = new _Sprite__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n      this.paddleXStart,\n      this.paddleYStart,\n      this.paddleWidth,\n      this.paddleHeight,\n      this.objectColor,\n    );\n    this.bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      cols: this.brickColumnCount,\n      rows: this.brickRowCount,\n      width: this.brickWidth,\n      height: this.brickHeight,\n      padding: this.brickPadding,\n      offsetLeft: this.offsetLeft,\n      offsetTop: this.offsetTop,\n      color: this.objectColor,\n    });\n\n    this.scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Score: ', 8, 20, this.objectColor);\n    this.livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Lives: ', this.canvas.width - 65, 20);\n\n    this.rightPressed = false;\n    this.leftPressed = false;\n    this.setup();\n\n    this.draw();\n  }\n\n  setup() {\n    this.livesLabel.value = 3;\n    // eslint-disable-next-line no-use-before-define\n    this.resetBallAndPaddle();\n\n    document.addEventListener('keydown', (e) => {\n      this.keyDownHandler(e);\n    }, false);\n    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);\n    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);\n  }\n\n  resetBallAndPaddle() {\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height - 30;\n    this.ball.dx = 3;\n    this.ball.dy = -3;\n    this.paddle.x = this.paddleXStart;\n  }\n\n  collisionDetection() {\n    for (let c = 0; c < this.bricks.cols; c += 1) {\n      for (let r = 0; r < this.bricks.rows; r += 1) {\n        const brick = this.bricks.bricks[c][r];\n        if (brick.status === 1) {\n          if (\n            this.ball.x > brick.x\n              && this.ball.x < brick.x + this.brickWidth\n              && this.ball.y > brick.y\n              && this.ball.y < brick.y + this.brickHeight\n          ) {\n            this.ball.dy = -this.ball.dy;\n            brick.status = 0;\n\n            this.scoreLabel.value += 1;\n            if (this.scoreLabel.value === this.bricks.cols * this.bricks.rows) {\n              // eslint-disable-next-line no-alert\n              alert('YOU WIN, CONGRATULATIONS!');\n              document.location.reload();\n            }\n          }\n        }\n      }\n    }\n  }\n\n  movePaddle() {\n    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {\n      this.paddle.moveBy(7, 0);\n    } else if (this.leftPressed && this.paddle.x > 0) {\n      this.paddle.moveBy(-7, 0);\n    }\n  }\n\n  collisionsWithCanvasAndPaddle() {\n    // Bounce the ball off the left and right of the canvas\n    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius\n        || this.ball.x + this.ball.dx < this.ball.radius) {\n      this.ball.dx = -this.ball.dx;\n    }\n    // Bounce the ball of the top, paddle, or hit the bottom of the canvas\n    if (this.ball.y + this.ball.dy < this.ball.radius) {\n      // hit the top\n      this.ball.dy = -this.ball.dy;\n    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {\n      // hit the bottom\n      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {\n        // hit the paddle\n        this.ball.dy = -this.ball.dy;\n      } else {\n        // lose a life\n        this.livesLabel.value -= 1;\n\n        if (this.livesLabel.value < 1) {\n          // eslint-disable-next-line no-alert\n          alert('GAME OVER');\n          this.ball.x = 200;\n          this.ball.y = 200;\n          document.location.reload();\n        } else {\n          this.resetBallAndPaddle();\n        }\n      }\n    }\n  }\n\n  keyDownHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n      this.rightPressed = true;\n    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n      this.leftPressed = true;\n    }\n  }\n\n  keyUpHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n      this.rightPressed = false;\n    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n      this.leftPressed = false;\n    }\n  }\n\n  mouseMoveHandler(e) {\n    const relativeX = e.clientX - this.canvas.offsetLeft;\n    if (this.relativeX > 0 && relativeX < this.canvas.width) {\n      this.paddle.moveTo(relativeX - this.paddle.width / 2, this.paddleYStart);\n    }\n  }\n\n  draw() {\n    // console.log('game.draw()');\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.bricks.render(this.ctx);\n    this.ball.render(this.ctx);\n    this.paddle.render(this.ctx);\n    this.scoreLabel.render(this.ctx);\n    this.livesLabel.render(this.ctx);\n    this.collisionDetection();\n    this.ball.move();\n    this.movePaddle();\n    this.collisionsWithCanvasAndPaddle();\n    // Draw the screen again\n    // requestAnimationFrame(this.draw.bind(this)); // ** >> FIXME << **\n    requestAnimationFrame(() => {\n      this.draw();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://breakout/./src/Game.js?");

/***/ }),

/***/ "./src/GameLabel.js":
/*!**************************!*\
  !*** ./src/GameLabel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass GameLabel extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(text, x, y, color, font = '16px Arial') {\n    super(x, y, 0, 0, color);\n    this.text = text;\n    this.value = 0;\n    this.font = font;\n  }\n\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://breakout/./src/GameLabel.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sprite {\n  constructor(x = 0, y = 0, width = 10, height = 10, color = 'green') {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  moveBy(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n\n  moveTo(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout/./src/Sprite.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n// eslint-disable-next-line no-unused-vars\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('myCanvas');\n\n\n//# sourceURL=webpack://breakout/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;