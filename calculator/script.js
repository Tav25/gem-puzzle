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
    showDigital(0);
}

// const result = () => {
//     buffer1 = "";
//     showDigital(0);
// }

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
}


plus.onclick = function (event) {
    buffer2 = buffer1
    buttonFunction = "sum"
    // reset();
}

rez.onclick = function (event) {
    showDigital(buffer1*1+1*buffer2);
}






// ! 
console.log('Test');

// dig1.onclick = function(event) {
    //     // вывести тип события, элемент и координаты клика
    //     console.log(event.type + " на " + event.currentTarget);
//     console.log(event.clientX + ":" + event.clientY);

//   }


//   $("#popupShapes ul li input").click(function(element) {
//     var el = $(this).val();
//     console.log(el);
//   });


// !


// $("#testarea").mousemove(function(e) {
// 	$("#info").val($(e.target).attr("id"));
// })




