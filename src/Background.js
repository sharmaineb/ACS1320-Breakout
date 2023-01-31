class Background {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(ctx) {
    // create a linear gradient
    const gradient = ctx.createLinearGradient(0, 0, this.width, this.height);
    // add color stops
    gradient.addColorStop(0, '#D16BA5');
    gradient.addColorStop(0.5, '#86A8E7');
    gradient.addColorStop(1, '#5FFBF1');
    // set the fill style & draw and fill the background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}

export default Background;
