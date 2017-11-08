const canvas = document.querySelector('canvas');
const canvWidth = canvas.width = window.innerWidth;
const canvHeight = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const initialPoint = [canvWidth - 100, 50];
let lastPoint;

ctx.beginPath();

ctx.moveTo.apply(ctx, initialPoint);
(function drawRightLines(iterator) {
    const x = canvWidth - 100 + Math.random() * 50;
    const y = 50 + iterator;
    ctx.lineTo(x, y);
    if(iterator < 500) {
        drawRightLines(iterator + 10);
    }
    else {
        lastPoint = {
            x: x,
            y: y
        }
    }
})(10);
(function drawBottomLines(iterator) {
    const x = lastPoint.x - iterator;
    const y = lastPoint.y - Math.random() * 50;
    ctx.lineTo(x, y);
    if(iterator < 500) {
        drawBottomLines(iterator + 10);
    }
    else {
        lastPoint = {
            x: x,
            y: y
        }
    }
})(10);
(function drawLeftLines(iterator) {
    const x = lastPoint.x - Math.random() * 50;
    const y = lastPoint.y - iterator;
    ctx.lineTo(x, y);
    if(iterator < 500) {
        drawLeftLines(iterator + 10);
    }
    else {
        lastPoint = {
            x: x,
            y: y
        }
    }
})(10);
(function drawTopLines(iterator) {
    const x = lastPoint.x + iterator;
    const y = lastPoint.y + Math.random() * 50;
    ctx.lineTo(x, y);
    if(iterator < 490) {
        drawTopLines(iterator + 10);
    }
})(10);
// Connect last to first dot
ctx.lineTo.apply(ctx, initialPoint);
ctx.stroke();