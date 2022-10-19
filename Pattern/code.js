var canvas = document.getElementById("c");
var painter = canvas.getContext("2d");

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);//x, y, w, h

painter.fillStyle = "#FF0000";

var z = 0;
while(z < 13) {
    var i = 0;
    while(i < 13) {
        if(z >= i && z > 5 && i > 5){
            painter.fillRect(10 + 30*i, 10 + 30*z, 20, 20)
        } 
        if(z >= i && z > 5 && i > 5) {
            painter.fillRect(370 - 30*i, 10 + 30*z, 20, 20)
        }
        ++i
    }
    ++z;
}

var canvas2 = document.getElementById("c2");
var painter2 = canvas2.getContext("2d");

painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400);

painter2.fillStyle = "#FF0000";

for(var z = 0; z < 13; ++z) {
    for(var i = 0; i < 13; ++i) {
        if(i % 2 === 0 && z % 2 === 0) {
            painter2.fillRect(10 + 30*i, 10 + 30*z, 20, 20)
        }
        if(i % 2 === 1 && z % 2 === 1) {
            painter2.fillRect(10 + 30*i, 10 + 30*z, 20, 20)
        }
    }
}