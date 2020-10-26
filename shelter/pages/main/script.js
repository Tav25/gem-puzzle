function cl(x) {
    console.log(x)
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function myFunction() {
    var x = document.getElementById("burgerMenu");
    if (x.style.display === "block") {
        x.style.display = "none";

        cl("1")
    } else {
        x.style.display = "block";
        document.querySelector("body").style.overflow = 'hidden';//margin-left = values+'%';
        document.querySelector("html").style.overflow = 'hidden';
        // document.getElementById("small").style.background = "red";
        unfade(document.getElementById("small"));
        
        
        //.style.right = input.value + "px";
        
        cl("2")
    }
}
// myFunction()
cl("3")