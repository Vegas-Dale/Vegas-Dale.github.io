var painter = document.getElementById("canvas1").getContext("2d");

painter.fillStyle = "#DDDDDD";
painter.fillRect(0, 0, 400, 400);

for(var j = 0; j < 40; ++j) {
    for(var i = 0; i < 40; ++i) {
        if((i + j) % 2 == 1) {
            painter.fillStyle = "#777777";
            painter.fillRect(0 + 10 * i, 0 + 10 * j, 10, 10)
        }
    }
}

for(var a = 0; a < 39; ++a) {
    for(var b = 0; b < 39; ++b) {
        if (a > 9 && a < 29 && b > 9 && b < 29) {
            if((a + b) % 2 == 0) {
                painter.fillStyle = "#000000"
                painter.fillRect(8 + 10 * b, 8 + 10 * a, 4, 4);
            } else {
                painter.fillStyle = "#FFFFFF"
                painter.fillRect(8 + 10 * b, 8 + 10 * a, 4, 4);
            }
        } else if((a + b) % 2 == 1) {
            painter.fillStyle = "#000000"
            painter.fillRect(8 + 10 * b, 8 + 10 * a, 4, 4);
        } else {
            painter.fillStyle = "#FFFFFF"
            painter.fillRect(8 + 10 * b, 8 + 10 * a, 4, 4);
        }
    }
}


