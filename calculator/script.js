// ! help functions

let x = "";

const showDigital = (input = "0") => {
    document.getElementById("maindisplay").innerHTML = input;
}

let calculation = (num) => {
    x = num + x;
    showDigital(x);
}


// dig0.onclick = function (event) {
//     console.log(this.id)
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

dig0.onclick = function (event) {
    x = ""
    showDigital(x);
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




