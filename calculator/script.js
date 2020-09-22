// ! help functions

let buffer1 = "";// show on display
let buffer2 = "";// memory
let buttonFunction;
let afterRez;

const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

const calculation = (num) => {
    buffer1 = buffer1 + num;
    showDigital(buffer1);
}

const reset = () => {
    buffer1 = "";
    buffer2 = "";
    afterRez = "";
    // showDigital(0);
}

const result = (bf) => {



    switch (bf) {
        case "sum":
            console.log("+");
            afterRez = (buffer2 * 1) + (1 * buffer1);
            break;

        case "sub":
            console.log("-");
            afterRez = (buffer2 * 1) - (1 * buffer1);
            break;

        case "mul":
            console.log("*");
            afterRez = (buffer2 * 1) * (1 * buffer1);
            break;

        case "sul":
            console.log("/");
            afterRez = (buffer2 * 1) / (1 * buffer1);
            break;

        default:
            break;
    }

    // buffer2 = "";
    showDigital(( Math.floor(afterRez * 100) / 100 ));
    // afterRez = "";
    // buffer1 = 
    buffer1 = afterRez;
    buffer2 = "";
    afterRez = "";
}
const bufferResort = () => {
    if (buffer2 === "") {
        buffer2 = buffer1;
        buffer1 = "";
    }
}

dig1.onclick = function (event) { calculation(this.id[3]) }
dig2.onclick = function (event) { calculation(this.id[3]) }
dig3.onclick = function (event) { calculation(this.id[3]) }
dig4.onclick = function (event) { calculation(this.id[3]) }
dig5.onclick = function (event) { calculation(this.id[3]) }
dig6.onclick = function (event) { calculation(this.id[3]) }
dig7.onclick = function (event) { calculation(this.id[3]) }
dig8.onclick = function (event) { calculation(this.id[3]) }
dig9.onclick = function (event) { calculation(this.id[3]) }
dig0.onclick = function (event) { calculation(this.id[3]) }

point.onclick = function (event) { calculation(".") }

backspace.onclick = function (event) {
    buffer1 = buffer1.slice(0, -1);
    if (buffer1 === "") { buffer1 = 0 }
    showDigital(buffer1)
    console.log();
}


ac.onclick = function (event) {
    reset();
    showDigital(0);
}

plus.onclick = function (event) {
    buttonFunction = "sum"
    bufferResort();
    showDigital(0);
}



subtract.onclick = function (event) {
    buttonFunction = "sub"
    bufferResort();
    showDigital(0);

}

multiply.onclick = function (event) {
    buttonFunction = "mul"
    bufferResort();
    showDigital(0);
}

sublime.onclick = function (event) {
    buttonFunction = "sul"
    bufferResort();
    showDigital(0);
}

rez.onclick = function (event) {
    result(buttonFunction);
    // reset();

}


// ! console help function 

AllKeys.onclick = function (event) {
    console.log("b1:" + buffer1 + " b2:" + buffer2 + " rez:" + afterRez + " f:" + buttonFunction);
}






