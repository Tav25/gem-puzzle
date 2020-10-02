

let buffer1 = 0;
let buffer2 = 0;
let buffer3 = 0;
let afterRez = 0;
let buttonFunction = "";
let lastNumber = 0;
let clickControl = false;
let buttonFunctionMemory = "";
let hasPoint = false;


const showDigital = (input = 0) => {
    if ((input > 99999999) || (input < -99999999) || (input.toString().includes('e') === true)) {
        console.log(input = "Err");
        reset();
    }

    document.getElementById("maindisplay").innerHTML = input.toString().slice(0, 9);
}

const showFun = (input = "") => {
    document.getElementById("fun").innerHTML = input;
}

const calculation = (num = 0) => {

    if ((buffer2.toString().length >= 10) || (buffer1.toString().length >= 10)) { num = "" }

    if ((buttonFunction !== "") && (clickControl === false)) { reset() }// сброс после "= число"


    if (buttonFunction === "") {
        if ((num === ".") || (num === "0")) { buffer1 = (buffer1 + num) }
        else { buffer1 = (buffer1 + num) * 1; }// точка
        if (buffer1 === "00") { buffer1 = 0 }
        showDigital(buffer1);
    } else {
        if ((num === ".") || (num === "0")) { buffer2 = (buffer2 + num) }
        else { buffer2 = (buffer2 + num) * 1; }// точка
        if (buffer2 === "00") { buffer2 = 0 }
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
    hasPoint = false;
    showFun("")
    console.log("--------------------------")

}

const bufferResort = () => {
    console.log(buffer1 / 1)
    buffer2 = buffer1;
    buffer1 = 0;
    console.log(buffer2 * 1)
}

const result = (bf) => {
    showFun(bf);
    hasPoint = false;
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

        case "+":
            afterRez = buffer1 + buffer2;
            break;

        case "-":
            afterRez = buffer1 - buffer2;
            break;

        case "*":
            if (buffer2 === 0) { buffer2 = 1 }
            // afterRez = (buffer1) * (buffer2);
            cf = 10;
            afterRez = (buffer1 * cf) * (buffer2 * cf) / (cf * cf) //(buffer1 * cf) * (buffer2 * cf) / (cf * cf)

            // if ((buffer2 < 0) && (buffer1 < 0)) { afterRez = 777 }
            break;

        case "/":
            if (buffer2 === 0) { buffer2 = 1 }
            afterRez = buffer1 / buffer2;
            break;

        case "√":
            if (buffer1 < 0) {
                afterRez = NaN;
                break;
            }

            afterRez = Math.sqrt(buffer1);
            buttonFunction = "";
            lastNumber = 0;
            bf = "";
            console.log(afterRez);
            break;

        case "**":
            // if (buffer2 === 0) { buffer2 = 1 }
            afterRez = Math.pow(buffer1, 2);
            buttonFunction = "";
            lastNumber = 0;
            break;

        case "**x":
            if (buffer2 === 0) { buffer2 = 1 }
            afterRez = Math.pow(buffer1, buffer2);
            break;

        default:
            // afterRez = "0"
            break;
    }
    afterRez = (Math.floor(afterRez * 10000) / 10000)
    buffer1 = afterRez
    buffer2 = 0;
    buttonFunctionMemory = bf;

    // showDigital(afterRez);
    // showDigital((Math.floor(afterRez * 1000) / 1000));
    showDigital(afterRez);
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

pi.onclick = function (event) {
    if (buttonFunction === "") {
        buffer1 = 3.1416;
        lastNumber = buffer1;
        showDigital(buffer1);
    } else {
        buffer2 = 3.1416;
        lastNumber = buffer2;
        showDigital(buffer2);
    }
}


minus_sign.onclick = function (event) {

    if (buttonFunction === "") {
        buffer1 = (buffer1) * -1;
        lastNumber = buffer1;
        showDigital(buffer1);
    } else {
        buffer2 = (buffer2) * -1;
        lastNumber = buffer2;
        showDigital(buffer2);
    }
}



point.onclick = function (event) {
    if (hasPoint === false) { calculation(".") }
    hasPoint = true;
}

backspace.onclick = function (event) {
    
    console.log("<--")
    if (clickControl === false) {
        if ((buffer1 < 0) && (buffer1 > -10)) { buffer1 = 0 }// error "-5"
        buffer1 = buffer1.toString().slice(0, -1) * 1;
        if (buffer1 === 0) { buffer1 = 0 }
        showDigital(buffer1);
        console.log();
    }

    if (clickControl === true){
        if ((buffer2 < 0) && (buffer2 > -10)) { buffer2 = 0 }// error "-5"
        buffer2 = buffer2.toString().slice(0, -1) * 1;
        lastNumber = buffer2;
        if (buffer2 === 0) { buffer2 = 0 }
        showDigital(buffer2);
        console.log();
    }
    // showFun("<=");
}


ac.onclick = function (event) {
    reset();
    showDigital(0);
}

c2.onclick = function (event) {
    clickControl = false;
    buttonFunction = "**"
    result(buttonFunction);
}

cx.onclick = function (event) {
    clickControl = true;
    buttonFunction = "**x"
    result(buttonFunction);
}

root_number.onclick = function (event) {
    clickControl = false;
    buttonFunction = "√"
    buttonFunctionMemory = "";
    result(buttonFunction);
}

plus.onclick = function (event) {
    clickControl = true;
    buttonFunction = "+"
    result(buttonFunction);

}

subtract.onclick = function (event) {
    clickControl = true;
    buttonFunction = "-"
    result(buttonFunction);
}

multiply.onclick = function (event) {
    clickControl = true;
    buttonFunction = "*"
    result(buttonFunction);

}

sublime.onclick = function (event) {
    clickControl = true;
    buttonFunction = "/"
    result(buttonFunction);

}

rez.onclick = function (event) {
    clickControl = false;
    result(buttonFunction);
    showFun("=");

    // buttonFunction = "";
}


// ! console help function 

AllKeys.onclick = function (event) {
    console.log(`b1:${buffer1} b2:${buffer2} ar:${afterRez} ln:${lastNumber} bf:${buttonFunction} bfm:${buttonFunctionMemory} cc:${clickControl}`)
}






