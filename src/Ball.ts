import Sprite from './Sprite';

class Ball extends Sprite {
  // Declare class properties here!
  radius: number
  dx: number
  dy: number

  constructor(x: number, y: number, radius = 10, color = '#ff6f69') {
    super(x, y, radius * 2, radius * 2, color);
    // Properties declared above are initialized here
    this.radius = radius
    this.dx = 2
    this.dy = -2
  }

  move() {
    this.x += this.dx
    this.y += this.dy
  }

  render(ctx: any): void { // Override
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
