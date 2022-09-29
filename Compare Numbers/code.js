var inp1 = document.getElementById("input1");
var inp2 = document.getElementById("input2");
var inp3 = document.getElementById("input3");



var btn = document.getElementById("btn1");
btn.addEventListener('click', maxNum);

function maxNum() {
    var String1 = inp1.value;
    var num1 = Number(String1);

    var String2 = inp2.value;
    var num2 = Number(String2);

    var String3 = inp3.value;
    var num3 = Number(String3);

    var a = num1;
    var b = num2;
    var c = num3;
    var max = a > b ? a : b;
    max = max > c ? max : c;
    alert(max);
}