var painter = document.getElementById("c").getContext("2d");

var timer;

var v = 0;
var ls = 0;
var rs = 0;
var isScore = false;
var p1Score = false;
var p2Score = false;


var dY = 7;
var Y1 = 175;
var X1 = 10;
var W = 5;
var H = 50;
var Y2 = 175;
var X2 = 385;
var ballY = 200;
var ballX = 200;
var balldY = 2;
var dX = 2;
var r = 6;
var isUp1 = false;
var isDown1 = false;
var isUp2 = false;
var isDown2 = false;

document.addEventListener("keydown", onKeyDown1);
document.addEventListener("keyup", onKeyUp1);

drawFrame();

function init() {
    timer = setInterval(drawFrame, 20);
    Y1 = 175;
    Y2 = 175;
    ballY = 200;
    ballX = 200;
    balldY = 2;
    dX = 2;
    v = 0;
    isScore = false;
    p1Score = false;
    p2Score = false;
    if(ls == 11 || rs == 11) {
        ls = 0;
        rs = 0;
    }
}

function onKeyDown1(e) {
     if (e.key === 'Enter') {
       init();
    }
    if ( e.key === 'w') {
        isUp1 = true;
    } else if (e.key === 's') {
        isDown1 = true;
    } else if (e.key === 'ArrowUp') {
        isUp2 = true;
    } else if (e.key === 'ArrowDown') {
        isDown2 = true;
    }
}

function onKeyUp1(e) {
    if ( e.key === 'w') {
        isUp1 = false;
    } else if (e.key === 's') {
        isDown1 = false;
    } else if (e.key === 'ArrowUp') {
        isUp2 = false;
    } else if (e.key === 'ArrowDown') {
        isDown2 = false;
    }
}

function drawFrame() {
    if(isScore) {
        if(p1Score && ls != 11) {
            player1Scored();
        } 
        if(p2Score && rs != 11) {
            player2Scored();
        }
        whoWins();
        clearInterval(timer);
        return;
    }
    player1Scored();
    processCollision()
    movePaddle();
    moveBall();
    drawBackground();
    drawPaddles();
    drawBall();
    scoreBoard();
    whoWins();
}


function drawBackground() {
    painter.fillStyle = "#000000";
    painter.fillRect(0, 0, 400, 400);
}

function movePaddle() {
    if(isUp1 && Y1 >= 5) {
        v = -1;
        Y1-=dY;
    }
    if(isDown1 && Y1 <= 345) {
        v = 1;
        Y1+=dY;
    }
    if(isUp2 && Y2 >= 5) {
        v = -1;
        Y2-=dY;
    }
    if(isDown2 && Y2 <= 345) {
        v = 1;
        Y2+=dY;
    }
}

function drawPaddles() {
    painter.fillStyle = "#FFFFFF";
    painter.fillRect(X1, Y1, W, H);
    painter.fillRect(X2, Y2, W, H);
}

function moveBall() {
    if(ballX <= 390 || ballX >=0) {
    ballX+=dX;
    ballY+=balldY;
    }
}

function drawBall() {
   painter.beginPath();
   painter.arc(ballX, ballY, r, 0, 2 * Math.PI, false);
   painter.fillStyle = "#FF0000";
   painter.fill();
   painter.stroke();
}

function processCollision() {
   
        
    // ball collides with left paddle
    if (isXyInRect(ballX - r, ballY - r, X1, Y1, W, H) || isXyInRect(ballX - r, ballY + r, X1, Y1, W, H)) {
        dX = -dX;
        dX+=.2;
        balldY+=v;
    }
    // ball collides with right paddle
    if (isXyInRect(ballX + r, ballY - r, X2, Y2, W, H) || isXyInRect(ballX + r, ballY + r, X2, Y2, W, H)) {
        dX = -dX;
        dX-=.2;
        balldY+=v;
    }
    if(ballY - r <= 0 || ballY + r >= 400) {
        balldY = -balldY;
    }
}

function isXyInRect(x, y, rx, ry, rw, rh) {
    if (x >= rx && x <= rx+rw && y >= ry && y <= ry + rh) {
        return true;
    } else {
        return false;
    }
}

function scoreBoard() {
    var Score = document.getElementById('Score')
    Score.innerHTML = ls + " - " + rs;

    if(ballX - r <= 0) {
        dX = 0;
        balldY = 0;
        ++rs;
        ballX = 200;
        ballY = 200;
        isScore = true;
        p2Score = true;
    } 
    if(ballX + r >= 400) {
        dX = 0;
        balldY = 0;
        ++ls;
        ballX = 200;
        ballY = 200;
        isScore = true;
        p1Score = true;
    }

   
}

function player1Scored() {
    painter.font = '50px Arial';
    painter.fillStyle = '#888800';
    painter.textBaseline = 'top';
    painter.textAlign = 'center';
    painter.fillText('Player 1 Scores!', 200, 200);
}

function player2Scored() {
    painter.font = '50px Arial';
    painter.fillStyle = '#888800';
    painter.textBaseline = 'top';
    painter.textAlign = 'center';
    painter.fillText('Player 2 Scores!', 200, 200);
}

function whoWins() {
    if(ls == 11) {
        painter.font = '50px Arial';
        painter.fillStyle = '#888800';
        painter.textBaseline = 'top';
        painter.textAlign = 'center';
        painter.fillText('Player 1 Wins!', 200, 200);
    }
    if(rs == 11) {
        painter.font = '50px Arial';
        painter.fillStyle = '#888800';
        painter.textBaseline = 'top';
        painter.textAlign = 'center';
        painter.fillText('Player 2 Wins!', 200, 200);
    }

}
