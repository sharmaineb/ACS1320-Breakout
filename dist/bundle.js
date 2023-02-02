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

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Ball = /** @class */ (function (_super) {\n    __extends(Ball, _super);\n    function Ball(x, y, radius, color) {\n        if (radius === void 0) { radius = 10; }\n        if (color === void 0) { color = '#ff6f69'; }\n        var _this = _super.call(this, x, y, radius * 2, radius * 2, color) || this;\n        // Properties declared above are initialized here\n        _this.radius = radius;\n        _this.dx = 2;\n        _this.dy = -2;\n        return _this;\n    }\n    Ball.prototype.move = function () {\n        this.x += this.dx;\n        this.y += this.dy;\n    };\n    Ball.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Ball;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout/./src/Ball.ts?");

/***/ }),

/***/ "./src/Brick.ts":
/*!**********************!*\
  !*** ./src/Brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Brick = /** @class */ (function (_super) {\n    __extends(Brick, _super);\n    function Brick(x, y, width, height, color) {\n        var _this = _super.call(this, x, y, width, height, color) || this;\n        _this.status = 1;\n        return _this;\n    }\n    return Brick;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout/./src/Brick.ts?");

/***/ }),

/***/ "./src/Bricks.ts":
/*!***********************!*\
  !*** ./src/Bricks.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.ts\");\n\nvar Bricks = /** @class */ (function () {\n    function Bricks(cols, rows, width, height, padding, offsetLeft, offsetTop, color) {\n        this.cols = cols;\n        this.rows = rows;\n        this.bricks = [];\n        this.width = width;\n        this.height = height;\n        this.padding = padding;\n        this.offsetLeft = offsetLeft;\n        this.offsetTop = offsetTop;\n        this.color = color;\n        this.init();\n    }\n    Bricks.prototype.init = function () {\n        for (var c = 0; c < this.cols; c += 1) {\n            this.bricks[c] = [];\n            for (var r = 0; r < this.rows; r += 1) {\n                var brickX = (c * (this.width + this.padding)) + this.offsetLeft;\n                var brickY = (r * (this.height + this.padding)) + this.offsetTop;\n                this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height, this.color);\n            }\n        }\n    };\n    Bricks.prototype.render = function (ctx) {\n        for (var c = 0; c < this.cols; c += 1) {\n            for (var r = 0; r < this.rows; r += 1) {\n                var brick = this.bricks[c][r];\n                if (brick.status === 1) {\n                    brick.render(ctx);\n                }\n            }\n        }\n    };\n    return Bricks;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://breakout/./src/Bricks.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.ts\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLabel */ \"./src/GameLabel.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvasId) {\n        this.canvas = document.getElementById(canvasId);\n        this.ctx = this.canvas.getContext('2d');\n        this.ballRadius = 10;\n        this.paddleHeight = 10;\n        this.paddleWidth = 75;\n        this.brickRowCount = 3;\n        this.brickColumnCount = 5;\n        this.brickWidth = 75;\n        this.brickHeight = 20;\n        this.brickPadding = 10;\n        this.brickOffsetTop = 30;\n        this.brickOffsetLeft = 30;\n        this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;\n        this.paddleYStart = (this.canvas.height - this.paddleHeight);\n        this.objectColor = '#efffba';\n        this.gameOverMessage = 'Game Over';\n        this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, this.ballRadius, this.objectColor);\n        this.paddle = new _Sprite__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.paddleXStart, this.paddleYStart, this.paddleWidth, this.paddleHeight, this.objectColor);\n        this.bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.brickColumnCount, this.brickRowCount, this.brickWidth, this.brickHeight, this.brickPadding, this.brickOffsetLeft, this.brickOffsetTop, this.objectColor);\n        this.scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Score: ', 8, 20, this.objectColor);\n        this.livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Lives: ', this.canvas.width - 65, 20, this.objectColor);\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.setup();\n        this.draw();\n    }\n    Game.prototype.setup = function () {\n        this.livesLabel.value = 3;\n        this.resetBallAndPaddle();\n        document.addEventListener('keydown', this.keyDownHandler.bind(this), false);\n        document.addEventListener('keyup', this.keyUpHandler.bind(this), false);\n        document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);\n    };\n    Game.prototype.resetBallAndPaddle = function () {\n        this.ball.x = this.canvas.width / 2;\n        this.ball.y = this.canvas.height - 30;\n        this.ball.dx = 2;\n        this.ball.dy = -2;\n        this.paddle.x = this.paddleXStart;\n    };\n    Game.prototype.collisionDetection = function () {\n        for (var c = 0; c < this.bricks.cols; c += 1) {\n            for (var r = 0; r < this.bricks.rows; r += 1) {\n                var brick = this.bricks.bricks[c][r];\n                if (brick.status === 1) {\n                    if (this.ball.x > brick.x\n                        && this.ball.x < brick.x + this.brickWidth\n                        && this.ball.y > brick.y && this.ball.y < brick.y + this.brickHeight) {\n                        this.ball.dy = -this.ball.dy;\n                        brick.status = 0;\n                        this.scoreLabel.value += 1;\n                        if (this.scoreLabel.value === this.bricks.cols * this.bricks.rows) {\n                            // eslint-disable-next-line no-alert\n                            alert('You Win! CONGRATULATIONS!');\n                            document.location.reload();\n                        }\n                    }\n                }\n            }\n        }\n    };\n    Game.prototype.movePaddle = function () {\n        if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {\n            this.paddle.moveBy(7, 0);\n        }\n        else if (this.leftPressed && this.paddle.x > 0) {\n            this.paddle.moveBy(-7, 0);\n        }\n    };\n    Game.prototype.canvasAndPaddleCollision = function () {\n        if (this.ball.x + this.ball.dx > this.canvas.width - this.ballRadius\n            || this.ball.x + this.ball.dx < this.ballRadius) {\n            this.ball.dx = -this.ball.dx;\n        }\n        if (this.ball.y + this.ball.dy < this.ballRadius) {\n            this.ball.dy = -this.ball.dy;\n        }\n        else if (this.ball.y + this.ball.dy > this.canvas.height - this.ballRadius) {\n            if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {\n                this.ball.dy = -this.ball.dy;\n            }\n            else {\n                this.livesLabel.value -= 1;\n                if (this.livesLabel.value < 1) {\n                    // eslint-disable-next-line no-alert\n                    alert('GAME OVER');\n                    this.ball.x = 200;\n                    this.ball.y = 200;\n                    document.location.reload();\n                }\n                else {\n                    this.resetBallAndPaddle();\n                }\n            }\n        }\n    };\n    Game.prototype.keyDownHandler = function (e) {\n        if (e.keyCode === 39) {\n            this.rightPressed = true;\n        }\n        else if (e.keyCode === 37) {\n            this.leftPressed = true;\n        }\n    };\n    Game.prototype.keyUpHandler = function (e) {\n        if (e.keyCode === 39) {\n            this.rightPressed = false;\n        }\n        else if (e.keyCode === 37) {\n            this.leftPressed = false;\n        }\n    };\n    Game.prototype.mouseMoveHandler = function (e) {\n        var relativeX = e.clientX - this.canvas.offsetLeft;\n        if (relativeX > 0 && relativeX < this.canvas.width) {\n            this.paddle.moveTo(relativeX - this.paddle.width / 2, this.paddleYStart);\n        }\n    };\n    Game.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.bricks.render(this.ctx);\n        this.ball.render(this.ctx);\n        this.paddle.render(this.ctx);\n        this.scoreLabel.render(this.ctx);\n        this.livesLabel.render(this.ctx);\n        this.collisionDetection();\n        this.ball.move();\n        this.movePaddle();\n        this.canvasAndPaddleCollision();\n        requestAnimationFrame(this.draw.bind(this));\n    };\n    return Game;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://breakout/./src/Game.ts?");

/***/ }),

/***/ "./src/GameLabel.ts":
/*!**************************!*\
  !*** ./src/GameLabel.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GameLabel = /** @class */ (function (_super) {\n    __extends(GameLabel, _super);\n    function GameLabel(text, x, y, color, font) {\n        if (font === void 0) { font = '16px Arial'; }\n        var _this = _super.call(this, x, y, 0, 0, color) || this;\n        _this.text = text;\n        _this.value = 0;\n        _this.font = font;\n        return _this;\n    }\n    GameLabel.prototype.render = function (ctx) {\n        ctx.font = this.font;\n        ctx.fillstyle = this.color;\n        ctx.fillText(\"\".concat(this.text, \" \").concat(this.value), this.x, this.y);\n    };\n    return GameLabel;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://breakout/./src/GameLabel.ts?");

/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Sprite = /** @class */ (function () {\n    function Sprite(x, y, width, height, color) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (width === void 0) { width = 10; }\n        if (height === void 0) { height = 10; }\n        if (color === void 0) { color = '#f1f1f1'; }\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n    }\n    Sprite.prototype.moveBy = function (dx, dy) {\n        this.x += dx;\n        this.y += dy;\n    };\n    Sprite.prototype.moveTo = function (x, y) {\n        this.x = x;\n        this.y = y;\n    };\n    Sprite.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, this.width, this.height);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Sprite;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout/./src/Sprite.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\n// eslint-disable-next-line no-unused-vars\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('myCanvas');\n\n\n//# sourceURL=webpack://breakout/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;