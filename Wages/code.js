var input1 = document.getElementById("normpay");
var input2 = document.getElementById("overpay");
var input3 = document.getElementById("normhour");
var input4 = document.getElementById("workhour");

function calcWage() {
    var normpay = input1.value;
    normpay = Number(normpay);

    var overpay = input2.value;
    overpay = Number(overpay);

    var normhour = input3.value;
    normhour = Number(normhour);

    var workhour = input4.value;
    workhour = Number(workhour);

    var wage;
    if (workhour <= normhour) {
        wage = workhour * normpay;
    } else {
        wage = ((workhour - normhour) * overpay) + (normhour * normpay);
    }

    var p = document.getElementById('p1');
    p.innerHTML = "Your earned wage is: $" + wage;
}

var btn = document.getElementById('btn1');
btn.addEventListener('click', calcWage);