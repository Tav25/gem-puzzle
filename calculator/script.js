// ! help functions

let buffer1 = 0;// show on display
let buffer2 = 0;// memory
let buffer3 = 0;// memory
let afterRez = 0;
let buttonFunction = "";
let lastNumber = 0;
let clickControl = false;
let buttonFunctionMemory = "";
let hasPoint = false;


const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

const calculation = (num = 0) => {

    if ((buttonFunction !== "") && (clickControl === false)) { reset() }// сброс после "= число"

    if (buttonFunction === "") {
        buffer1 = (buffer1 + num) * 1;
        if (num === ".") { buffer1 = (buffer1 + num) }// точка
        showDigital(buffer1);
    } else {
        buffer2 = (buffer2 + num) * 1;
        if (num === ".") { buffer2 = (buffer2 + num) }// точка
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
    buttonFunctionMemory = "";
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
    // console.log("result clickControl=" + clickControl + "  F:" + bf + " FM:" + buttonFunctionMemory);

    if (buttonFunctionMemory === "") {
        console.log("new fun");
        buttonFunctionMemory = bf;
    }
    // buttonFunctionMemory = bf;
    if (clickControl === false) { buffer2 = lastNumber; }
    switch (buttonFunctionMemory) {

        case "sum":
            afterRez = buffer1 + buffer2;
            break;

        case "sub":
            afterRez = buffer1 - buffer2;
            break;

        case "mul":
            if (buffer2 === 0) { buffer2 = 1 }
            afterRez = buffer1 * buffer2;
            break;

        case "sul":
            if (buffer2 === 0) { buffer2 = 1 }
            afterRez = buffer1 / buffer2;
            break;

        case "rootNumber":
            if (buffer1 < 0){ 
                afterRez = NaN;
                break;
            }

            afterRez = Math.sqrt(buffer1);
            // buffer1 = afterRez;// show on display
            // buffer2 = 0;// memory
            buttonFunction = "";
            lastNumber = 0;
            // clickControl = true;
            bf = "";
            console.log(afterRez);
            break;

        default:
            // afterRez = "0"
            break;
    }
    buffer1 = afterRez
    buffer2 = 0;
    buttonFunctionMemory = bf;

    // showDigital(afterRez);
    showDigital((Math.floor(afterRez * 100) / 100));
    if (afterRez !== afterRez) { //if NaN
        showDigital("Err");
        reset();
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


minus_sign.onclick = function (event) {

    if (buttonFunction === "") {
        buffer1 = (buffer1) * -1;
        showDigital(buffer1);
    } else {
        buffer2 = (buffer2) * -1;
        showDigital(buffer2);
    }
}



point.onclick = function (event) { calculation(".") }

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

root_number.onclick = function (event) {
    clickControl = false;
    buttonFunction = "rootNumber"
    result(buttonFunction);
}

plus.onclick = function (event) {
    clickControl = true;
    buttonFunction = "sum"
    result(buttonFunction);

}

subtract.onclick = function (event) {
    clickControl = true;
    buttonFunction = "sub"
    result(buttonFunction);
}

multiply.onclick = function (event) {
    clickControl = true;
    buttonFunction = "mul"
    result(buttonFunction);

}

sublime.onclick = function (event) {
    clickControl = true;
    buttonFunction = "sul"
    result(buttonFunction);

}

rez.onclick = function (event) {
    clickControl = false;
    result(buttonFunction);
    // buttonFunction = "";
}


// ! console help function 

AllKeys.onclick = function (event) {
    console.log(`^${buffer1}^^${buffer2}^^${afterRez}^^${lastNumber}^^${buttonFunction}^^${buttonFunctionMemory} ^^${clickControl}`)
}






