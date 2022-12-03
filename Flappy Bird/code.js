var painter = document.getElementById('c').getContext('2d');

var pipe = [ [100, 180, 50, 100], [300, 50, 50, 100], [500, 280, 50, 100] ]; //[x, y, w, h] of the opening between the pipes
var pipe_dx = -2;

var birdX = 50;
var birdY = 200;
var g = 0.2;
var birdDy = 0; //delta y, the the change of birdY in an interval
var birdSize = 20;
var jump = -6;

var timer;
var score = 0;

document.addEventListener('keydown', onKeyDown);

function init() {
    pipe = [ [100, 180, 50, 100], [300, 50, 50, 100], [500, 280, 50, 100] ];

    birdY = 200;
    birdDy = 0; //delta y, the the change of birdY in an interval

    score = 0;
    timer = setInterval(drawFrame, 20);
}

function onKeyDown(e) {
    if(e.key === 'Enter'){
        init();
    } else if(e.key === ' ') {
        birdDy += jump;
    }

}

function updatePipes() {
    for(var i = 0; i < pipe.length; ++i) {
        pipe[i][0] += pipe_dx;
        //if any pipe is outside the left, then place it to the right
        if(pipe[i][0] < 0-pipe[i][2]) {
            pipe[i][0] = 600;
            pipe[i][1] = + Math.random()*(300-10)+10;
            ++score;
        }
    }
}

function updateBird() {
    birdDy += g;
    birdY += birdDy;
}

function isOver() {
    for(var i = 0; i < pipe.length; ++i) {
        //bird is in upper rect
        if(isXYinRect(birdX, birdY, pipe[i][0], 0, pipe[i][2], pipe[i][1]) || isXYinRect(birdX+birdSize, birdY, pipe[i][0], 0, pipe[i][2], pipe[i][1])) {
            return true;
        }

        //bird is in lower rect
        if(isXYinRect(birdX, birdY+birdSize, pipe[i][0], pipe[i][1]+pipe[i][3], pipe[i][2], pipe[i][1]) || isXYinRect(birdX+birdSize, birdY+birdSize, pipe[i][0], pipe[i][1]+pipe[i][3], pipe[i][2], 400-pipe[i][1]-pipe[i][2])) {
            return true;
        }
    }
    // top edge or bottom edge
    if(birdY <= 0 || birdY >= 400-birdSize) {
        return true;
    }
    
    return false;

}

function drawFrame() {
    //detect collision
    if(isOver()) {
        //show game over, clear the timer
        drawGameOver();
        clearInterval(timer);
        return;
    }
    //update data
    updatePipes();
    updateBird();
    //draw
    drawSky();
    drawGrass();
    drawGround();
    drawPipe();
    drawBird();
    drawScore();
}

function drawBird() {
    painter.fillStyle = '#FF0000';
    painter.fillRect(birdX, birdY, birdSize, birdSize);
}

function drawPipe() {
    for(var i = 0; i < pipe.length; ++i) {
        //draw upper pipe
        painter.fillStyle = "#00FF00";
        painter.fillRect(pipe[i][0], 0, pipe[i][2], pipe[i][1]);

        //draw lower pipe
        painter.fillRect(pipe[i][0], pipe[i][1] + pipe[i][3], pipe[i][2], 400 - pipe[i][1] - pipe[i][3]);
    }
}

function drawSky() {
    painter.fillStyle = '#0088FF';
    painter.fillRect(0, 0, 600, 400);
}

function drawGrass() {
    painter.fillStyle = '#006600';
    painter.fillRect(0, 400, 600, 5);
}

function drawGround() {
    painter.fillStyle = '#AAAA00';
    painter.fillRect(0, 405, 600, 95);
}

function isXYinRect(x, y, rx, ry, rw, rh) {
    if(x >= rx && x <= rx + rw && y >= ry && y <= ry + rh) {
        return true;
    } else {
        return false;
    }
}

drawFrame();

function drawGameOver() {
    painter.font = '50px Arial';
    painter.fillStyle = '#FFFFFF';
    painter.textBaseline = 'top';
    painter.textAlign = 'center';
    painter.fillText('GAME OVER', 300, 200);
}

function drawScore() {
    painter.font = '30px Arial';
    painter.fillStyle = '#000000';
    painter.textBaseline = 'top';
    painter.textAlign = 'left';
    painter.fillText(score + '', 10, 10);
}

