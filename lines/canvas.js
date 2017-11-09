const canvas = document.querySelector('canvas');
const canvWidth = canvas.width = window.innerWidth;
const canvHeight = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const pointHolder = [];
let movement = -3;
let movementUp = true;
let lastPoint, initialPoint;

function randomizeLineColor() {
    ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    // ctx.strokeStyle = 'black';
}

// Generate initial values
(function iterate(iterator) {
    const newPoint = [
        isOdd(iterator/10) ? canvWidth / 2 + Math.random() * 3: canvWidth / 2 - Math.random() * 3,
        isOdd(iterator/10) ? 50 + iterator : 50 + iterator
    ];
    pointHolder[iterator] = newPoint;
    if (iterator < 500) {
        iterate(iterator + 10);
    }
})(10);

function isOdd(num) {
    return num % 2;
}

function updateMovement() {
    if (movement > 5) {
        movementUp = false;
    }
    else if (movement < -5) {
        movementUp = true;
    }

    if (movementUp) {
        movement += 1;
    }
    else {
        movement -= 1;
    }
}

initialPoint = [canvWidth / 2, 50];

function drawSquare() {
    ctx.clearRect(0, 0, canvWidth, canvHeight);
    ctx.beginPath();
    ctx.moveTo.apply(ctx, initialPoint);
    (function drawRightLines(iterator) {
        // randomizeLineColor();
        let x, y;
        x = pointHolder[iterator][0] + movement / 5;
        y = pointHolder[iterator][1] - movement / 3;
        ctx.lineTo(x, y);
        updateMovement();
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
    // ctx.lineTo(initialPoint[0] - movement * 2, initialPoint[1] + 30);
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
    window.setTimeout(drawSquare, 50);
}
drawSquare();
console.log(pointHolder);