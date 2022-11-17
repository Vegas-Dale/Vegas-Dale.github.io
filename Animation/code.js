var painter = document.getElementById("canvas1").getContext("2d");
var btn = document.getElementById("start");
var btnleft = document.getElementById("left");
var btnright = document.getElementById("right");
var btnjump = document.getElementById("jump");
var x = 190;
var y = 0;

var dx = 2;

var g = 0.5;
var dy = 10;
var jump = -10;

var isLeft = false;
var isRight = false;
var isUp = false;

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

btn.addEventListener('click', onClick);
btnleft.addEventListener('click', onLeftClick);
btnright.addEventListener('click', onRightClick);
btnjump.addEventListener('click', onJump);

drawBackground();
drawSquare(x, y);


function onKeyDown(e) {
    if(e.key === 'Enter') {
        onClick();
    }
    if((e.key === 'ArrowLeft' || e.key === 'a')) {
        isLeft = true;
    } else if((e.key === 'ArrowRight' || e.key === 'd')) {
        isRight = true;
    } else if(e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') {
        isUp = true;
    }
}

function onKeyUp(e) {
    if(e.key === 'Enter') {
        onClick();
    }
    if((e.key === 'ArrowLeft' || e.key === 'a')) {
        isLeft = false;
    } else if((e.key === 'ArrowRight' || e.key === 'd')) {
        isRight = false;
    } else if(e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') {
        isUp = false;
    }
}

function drawBackground() {
    painter.fillStyle = "#000000";
    painter.fillRect(0, 0, 400, 400);
}

function drawSquare(x, y) {
    painter.fillStyle = "#FF0000";
    if(x < 0) {
        painter.fillRect(0, y, 20 + x, 20);
        painter.fillRect(400 + x, y, -x, 20);
    } if(x > 380) {
        painter.fillRect(x - 400, y, 20, 20)
    }
    painter.fillRect(x, y, 20, 20);
}

function drawFrame() {
    if(isUp) {
        onJump();
    }
    drawBackground();

    dy += g;
    y += dy;

    //update the square
    if(isLeft) {
        x -= dx;
    }
    if(isRight) {
        x += dx;
    }
    

    if(y > 380) {
        y = 380;
        dy = 0;
    }
    drawSquare(x, y);

    if(x < -20){
        x = 380;
    } if(x > 400) {
        x = 0;
    }
}

function onClick() {
    setInterval(drawFrame, 20);
}

function onLeftClick() {
    if(x > 0) {
        x = x - 10;
    }
    drawBackground();
    drawSquare(x, y);
}

function onRightClick() {
    if(x < 380) {
        x = x + 10;
    }
    drawBackground();
    drawSquare(x, y);
}

function onJump() {
    if(y === 380) {
        dy += jump;
    }
}