const canvas = document.querySelector('canvas');
const canvWidth = canvas.width = window.innerWidth;
const canvHeight = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const pointHolder = {
    right: []
};
let lastPoint, initialPoint;


function randomizeLineColor() {
    ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    // ctx.strokeStyle = 'black';
}

function isOdd(num) {
    return num % 2;
}

function drawSquare() {
    const movement = Math.random();
    ctx.clearRect(0, 0, canvWidth, canvHeight);
    initialPoint = [canvWidth - 100 + Math.random() * 10, 50 + Math.random() * 10];
    ctx.moveTo.apply(ctx, initialPoint);
    ctx.beginPath();
    (function drawRightLines(iterator) {
        randomizeLineColor();
        let x, y;
        ;x = (isOdd(iterator/10) ? canvWidth - 20 : canvWidth) - 200 - movement;
        y = 50 + iterator;
        ctx.lineTo(x, y);
        if (iterator < 500) {
            drawRightLines(iterator + 10);
        }
        else {
            lastPoint = {
                x: x,
                y: y
            }
        }
    })(10);
    // (function drawBottomLines(iterator) {
    //     randomizeLineColor();
    //     const x = lastPoint.x - iterator;
    //     const y = lastPoint.y - Math.random() * 10;
    //     ctx.lineTo(x, y);
    //     if (iterator < 500) {
    //         drawBottomLines(iterator + 10);
    //     }
    //     else {
    //         lastPoint = {
    //             x: x,
    //             y: y
    //         }
    //     }
    // })(10);
    // (function drawLeftLines(iterator) {
    //     randomizeLineColor();
    //     const x = lastPoint.x - Math.random() * 10;
    //     const y = lastPoint.y - iterator;
    //     ctx.lineTo(x, y);
    //     if (iterator < 490) {
    //         drawLeftLines(iterator + 10);
    //     }
    //     else {
    //         lastPoint = {
    //             x: x,
    //             y: y
    //         }
    //     }
    // })(10);
    // (function drawTopLines(iterator) {
    //     randomizeLineColor();
    //     const x = lastPoint.x + iterator;
    //     const y = lastPoint.y - Math.random() * 10;
    //     ctx.lineTo(x, y);
    //     if (iterator < 490) {
    //         drawTopLines(iterator + 10);
    //     }
    // })(10);
    // Connect last to first dot
    ctx.moveTo.apply(ctx, initialPoint);
    ctx.stroke();
    window.requestAnimationFrame(drawSquare);
}
window.requestAnimationFrame(drawSquare);
console.log(pointHolder);