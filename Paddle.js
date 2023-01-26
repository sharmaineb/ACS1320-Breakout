class Paddle extends Sprite {
  constructor(x, y, width, height, color = 'green') {
    super(x, y, width, height, color);
  }

  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
