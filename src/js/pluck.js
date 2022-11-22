class App {
    constructor () {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.querySelector('.container').appendChild(this.canvas);

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        document.addEventListener('pointerdown', this.onDown.bind(this), false)
        document.addEventListener('pointermove', this.onMove.bind(this), false)
        document.addEventListener('pointerup', this.onUp.bind(this), false)
        
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize () {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate () {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    }

    onDown (e) {
        //
    }

    onMove (e) {
        //
    }

    onUp (e) {
        //
    }
}

class BounceString {
    constructor (pos, color) {
        const middleX = ((pos.x2 - pos.x1) / 2) + pos.x1;
        const middleY = ((pos.y2 - pos.y1) / 2) + pos.y1;

        this.points = [
            {
                x: pos.x1,
                y: pos.y1,
                ox: pos.x1,
                oy: pos.y1,
                vx: 0,
                vy: 0,
            },
            {
                x: middleX,
                y: middleY,
                ox: middleX,
                oy: middleY,
                vx: 0,
                vy: 0,
            },
        ];

        this.detect = 10;

        this.color = color;
    }

    animate (ctx, moveX, moveY) {
        ctx.beginPath();
        ctx.fillStyle = '#ff00ff';
        ctx.arc(moveX, moveY, 20, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

window.onload = () => {
    new App();
}