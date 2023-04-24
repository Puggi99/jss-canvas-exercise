class Point {

    constructor(x, y, speedX, speedY, forceX, forceY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.forceX = forceX;
        this.forceY = forceY;
        this.color = color;
        this.forceX = (Math.random() * 0.2) - 0.1;
        this.forceY = (Math.random() * 0.2) - 0.1;
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, 0.1, 0.4)
    }

    changePosition() {
        if (Math.random() > 0.9) {
            this.forceX = (Math.random() * 0.2) - 0.1;
            this.forceY = (Math.random() * 0.2) - 0.1;
        }

        if (this.speedX > 1) {
            this.speedX = 1;
        }

        if (this.speedX < -1) {
            this.speedX = -1;
        }

        if (this.speedY > 1) {
            this.speedY = 1;
        }

        if (this.speedY < -1) {
            this.speedY = -1;
        }

        this.speedX += this.forceX;
        this.speedY += this.forceY;

        this.x += this.speedX;
        this.y += this.speedY;

    }

    //factory
    static generateRandom(canvasWidth, canvasHeight) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.7;

        const randomColor = `rgba(${red},${green},${blue},${alpha})`

        const randomX = 300
        const randomY = 300

        const speedX = (Math.random() * 2) - 1;
        const speedY = (Math.random() * 2) - 1;
            
        const forceX = (Math.random() * 0.2) - 0.1;
        const forceY = (Math.random() * 0.2) - 0.1;

        const newPoint = new Point(randomX, randomY, speedX, speedY, forceX, forceY, randomColor)
        return newPoint
    }
}