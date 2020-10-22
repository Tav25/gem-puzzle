console.log("dd")

const timeD = document.querySelector('.time'),
    dateD = document.querySelector('.date'),
    //   greeting = document.querySelector('.greeting'),
    nameD = document.querySelector('.inputName'),
    focusD = document.querySelector('.focus'),
    quoteD = document.querySelector('.quote'),
    nextQuoteD = document.querySelector('.nextQuote'),

    cityD = document.querySelector('.city'),
    descriptionD = document.querySelector('.description'),
    iconD = document.querySelector('.iconWeather'),
    temperatureD = document.querySelector('.temperature'),
    humidityD = document.querySelector('.humidity'),
    speedWindD = document.querySelector('.speedWind');







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
            console.log('+++++++++++++++' + localStorage.getItem('focusS'))
        }
    });

}

function setFocusZero() {
    focusD.innerHTML = '&nbsp;'
}

function setNameZero() {
    nameD.innerHTML = '&nbsp;'
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


function weather(city = "minsk") {
    // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=en&appid=4cc45adc1d4e95ce710a4c884b625ab0&units=metric', false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        let weatJSon = JSON.parse(xhr.responseText);
        console.log(weatJSon.name); //speed wind
        console.log(weatJSon.weather[0].description); // погода
        console.log(weatJSon.weather[0].icon); // погода icon http://openweathermap.org/img/wn/04n@4x.png
        console.log(weatJSon.main.temp); // temp
        console.log(weatJSon.main.humidity); //humidity
        console.log(weatJSon.wind.speed); //speed wind

        //
        cityD.innerHTML = weatJSon.name;
        // iconD.innerHTML = 'dfsfsd'
        temperatureD.innerHTML = weatJSon.main.temp + "&deg;"
        descriptionD.innerHTML = `${weatJSon.weather[0].description} h:${weatJSon.main.humidity}% ws:${weatJSon.wind.speed}`
            // humidityD.innerHTML = 'dfsfsd'
            // speedWindD.innerHTML = 'dfsfsd'
        // quoteD.innerHTML = `${person.name}`;
    }
}

weather()

// nameD.addEventListener('keyup', setName);
// nameD.addEventListener('blur', setName);

focusD.addEventListener("mouseup", setFocusZero);
nameD.addEventListener("mouseup", setNameZero);

nextQuoteD.addEventListener("mouseup", quote);


showTime();
getName();
setName();

getFocus();
setFocus();

quote();




localStorage.removeItem('nameS');
localStorage.removeItem('focusS');



// let str = "";

// let result = str.match(/^\s*$/g);

// // console.log( result[0] ); // JavaScript
// console.log( result.length ); // 1


weather()

