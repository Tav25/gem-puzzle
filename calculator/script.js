// ! help functions

let buffer1 = "";// show on display
let buffer2 = "";// memory
let buttonFunction;

const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

let calculation = (num) => {
    buffer1 = buffer1 + num;
    showDigital(buffer1);
}

const reset = () => {
    buffer1 = "";
    buffer2 = "";
    // showDigital(0);
}

const result = (bf) => {



    switch (bf) {
        case "sum":
            console.log("+");
            buffer1 = (buffer2 * 1) + (1 * buffer1);
            break;

        case "sub":
            console.log("-");
            buffer1 = (buffer2 * 1) - (1 * buffer1);
            break;

        case "mul":
            console.log("*");
            buffer1 = (buffer2 * 1) * (1 * buffer1);
            break;

        case "sul":
            console.log("/");
            buffer1 = (buffer2 * 1) / (1 * buffer1);
            break;

        default:
            break;
    }




    buffer2 = "";
    showDigital(buffer1);
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

ac.onclick = function (event) {
    reset();
    showDigital(0);
}

plus.onclick = function (event) {
    buttonFunction = "sum"
    buffer2 = buffer1;
    buffer1 = "";
    showDigital(0);

}

subtract.onclick = function (event) {
    buttonFunction = "sub"
    buffer2 = buffer1;
    buffer1 = "";
    showDigital(0);
}

multiply.onclick = function (event) {
    buttonFunction = "mul"
    buffer2 = buffer1;
    buffer1 = "";
    showDigital(0);
}

sublime.onclick = function (event) {
    buttonFunction = "sul"
    buffer2 = buffer1;
    buffer1 = "";
    showDigital(0);
}

rez.onclick = function (event) {
    result(buttonFunction);
    // reset();

}








// ! 

AllKeys.onclick = function (event) {
    console.log("b1:" + buffer1 + " b2:" + buffer2 + " f:" + buttonFunction);
}






