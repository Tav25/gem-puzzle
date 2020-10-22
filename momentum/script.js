console.log("dd")

const timeD = document.querySelector('.time')
const dateD = document.querySelector('.date')
//   greeting = document.querySelector('.greeting'),
const nameD = document.querySelector('.inputName')
const focusD = document.querySelector('.focus')
const quoteD = document.querySelector('.quote')
const nextQuoteD = document.querySelector('.nextQuote')


function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        dat = today.toLocaleDateString("en-US", options); // 30 января 2014





    // Output Time
    timeD.innerHTML = `${zero(hour)}${hour}:${zero(min)}${min}:${zero(sec)}${sec}`;
    dateD.innerHTML = `${dat}`;

    setTimeout(showTime, 1000);
}

function zero(num) {
    if (num < 10) {
        return "0"
    }
    return ""

}


function getName() {
    if (localStorage.getItem('nameS') === null) {
        nameD.textContent = '[Enter Name]';
    } else {
        nameD.textContent = localStorage.getItem('nameS');
    }
}

function setName() {
    nameD.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            localStorage.setItem('nameS', nameD.innerText);
            nameD.blur()
        }
        else {
            localStorage.setItem('nameS', nameD.innerText);
        }
    });
}

//focus
function getFocus() {
    if (localStorage.getItem('focusS') === null) {
        focusD.textContent = '[Enter focus]';
    } else {
        focusD.textContent = localStorage.getItem('focusS');
    }
}

function setFocus() {
    let prewFocus = localStorage.getItem('focusS')
    focusD.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            localStorage.setItem('focusS', focusD.innerText);
            focusD.blur()
        }
        else {
            localStorage.setItem('focusS', focusD.innerText);
        }
    });

    console.log(prewFocus)
}

function setFocusZero() {
focusD.innerHTML = '&nbsp;'

}

function quote() {
    // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://favqs.com/api/qotd', false);
    xhr.send(); 
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        let person = JSON.parse(xhr.responseText);
        console.log(person.quote.body); // responseText -- текст ответа.
        quoteD.innerHTML = person.quote.body;

    }
}

// nameD.addEventListener('keyup', setName);
// nameD.addEventListener('blur', setName);

focusD.addEventListener("mouseup", setFocusZero);
nextQuoteD.addEventListener("mouseup", quote);


showTime();
getName();
setName();

getFocus();
setFocus();

quote();




localStorage.removeItem('nameS');
localStorage.removeItem('focusS');


