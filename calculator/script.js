// ! help functions

let buffer1 = 0;// show on display
let buffer2 = 0;// memory
let buffer3 = 0;// memory
let afterRez = 0;
let buttonFunction = "";
let lastNumber = 0;
let clickControl = false;


const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

const calculation = (num = 0) => {
    if (buttonFunction === "") {
        buffer1 = (buffer1 + num) * 1;
        showDigital(buffer1);
    } else {
        buffer2 = (buffer2 + num) * 1;
        showDigital(buffer2);
    }
    lastNumber = buffer2;

}

const reset = () => {
    buffer1 = 0;// show on display
    buffer2 = 0;// memory
    buffer3 = 0;// memory
    afterRez = 0;
    buttonFunction = "";
    lastNumber = 0;
    clickControl = false;
    console.log("--------------------------")

}

const bufferResort = () => {
    console.log(buffer1 / 1)
    buffer2 = buffer1;
    buffer1 = 0;
    console.log(buffer2 * 1)
}

const result = (bf) => {
    // buffer1 = 50;
    // buffer2 = 75;
    console.log("result clickControl=" + clickControl);

    switch (bf) {
        case "sum":
            // console.log("+");
            afterRez = buffer1 + buffer2;
            buffer1 = afterRez
            buffer2 = lastNumber;
            if (clickControl === true) { buffer2 = 0; }
            break;
        case "sub":
            console.log("-");
            afterRez = buffer1 - buffer2;
            buffer1 = afterRez
            buffer2 = lastNumber;
            if (clickControl === true) { buffer2 = 0; }
            break;
        case "mul":
            console.log("*");
            afterRez = buffer1 * buffer2;
            buffer1 = afterRez
            buffer2 = lastNumber;
            break;
        case "sul":
            console.log("/");
            afterRez = buffer1 / buffer2;
            buffer1 = afterRez
            buffer2 = lastNumber;
            break;
        default:
            // afterRez = "0"
            break;
    }

    // showDigital(afterRez);
    showDigital((Math.floor(afterRez * 100) / 100));

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

point.onclick = function (event) {
    // calculation("1.0") 

    // showDigital(buffer1 + ".");
}

backspace.onclick = function (event) {
    buffer1 = buffer1.toString().slice(0, -1) * 1;
    if (buffer1 === 0) { buffer1 = 0 }
    showDigital(buffer1);
    console.log();
}


ac.onclick = function (event) {
    reset();
    showDigital(0);
}

plus.onclick = function (event) {
    clickControl = true;
    result(buttonFunction);
    buttonFunction = "sum"

}

subtract.onclick = function (event) {
    clickControl = true;
    result(buttonFunction);
    buttonFunction = "sub"
}

multiply.onclick = function (event) {
    buttonFunction = "mul"

}

sublime.onclick = function (event) {
    buttonFunction = "sul"

}

rez.onclick = function (event) {
    clickControl = false;
    result(buttonFunction);
    // buttonFunction = "";
}


// ! console help function 

AllKeys.onclick = function (event) {
    console.log(`^${buffer1}^^${buffer2}^^${afterRez}^^${buttonFunction}`)
}






