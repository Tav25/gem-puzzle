// ! help functions

let buffer1 = 0;// show on display
let buffer2 = 0;// memory


const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

const calculation = (num) => {
    buffer1 = (buffer1 + num)*1;
    showDigital(buffer1);
}

const reset = () => {

}

const bufferResort = () => {
    // console.log(buffer1/1.5)
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
}

subtract.onclick = function (event) {
    buttonFunction = "sub"
    bufferResort();
}

multiply.onclick = function (event) {
    buttonFunction = "mul"
    bufferResort();
}

sublime.onclick = function (event) {
    buttonFunction = "sul"
    bufferResort();
}

rez.onclick = function (event) {
}


// ! console help function 

AllKeys.onclick = function (event) {
    console.log(`^${buffer1}^`)
}






