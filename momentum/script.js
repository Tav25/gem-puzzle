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
    speedWindD = document.querySelector('.speedWind'),
    block = document.getElementById('bg'),
    buttonLeftD = document.getElementById('buttonleft'),
    buttonRightD = document.getElementById('buttonright'),
    timeofdayD = document.getElementById('timeofday'),
    bufferD = document.getElementById('buffer');


let path = "../momentum/assets/images/"
let i = new Date().getHours();

const arrImage = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "01", "02", "03", "04"];
shuffle(arrImage);

for (x in arrImage) {
    if (x >= 0 & x < 6) { arrImage[x] = "night/" + arrImage[x] }
    if (x >= 6 && x < 12) { arrImage[x] = "morning/" + arrImage[x] }
    if (x >= 12 & x < 18) { arrImage[x] = "day/" + arrImage[x] }
    if (x >= 18) { arrImage[x] = "evening/" + arrImage[x] }
    // console.log( arrImage[x])
}




function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        dat = today.toLocaleDateString("en-US", options);




    // Output Time
    timeD.innerHTML = `${zero(hour)}${hour}:${zero(min)}${min}:${zero(sec)}${sec}`;
    dateD.innerHTML = `${dat}`;

    nextImageHour(hour, min + sec, 1);
    setTimeout(showTime, 1000);
}

function test0() {
    console.log("Test")
    nextImageHour(0, 0, 1)
}

function test1() {
    console.log("Test")
    nextImageHour(0, 0, -1)
}



function nextImageHour(h = 0, m = 0, x = 1) {

    console.log("nextImageHour h: ")
    
    if (m === 0) {
        // let h = 3;
        let timeOfDay = ""
        if (h >= 0 & h < 6) { timeOfDay = "night" }
        if (h >= 6 && h < 12) { timeOfDay = "morning" }
        if (h >= 12 & h < 18) { timeOfDay = "day" }
        if (h >= 18) { timeOfDay = "evening" }

        timeofdayD.innerHTML = `${timeOfDay}`;

        console.log(`i:${i} td:${timeOfDay} img:${arrImage[i]}.jpg`)
        block.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i] + ".jpg')";
        if (arrImage[i + 1]) { bufferD.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i + 1] + ".jpg')"; }

        i = i + x;
        if (i === 24) { i = 0 }
        if (i === -1) { i = 23 }


    }
    // console.log(m)
}




function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
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
        descriptionD.innerHTML = `${weatJSon.weather[0].description}  humidity:${weatJSon.main.humidity}%  wind speed:${weatJSon.wind.speed}ms`
        // humidityD.innerHTML = 'dfsfsd'
        // speedWindD.innerHTML = 'dfsfsd'
        // quoteD.innerHTML = `${person.name}`;
    }
}




// nameD.addEventListener('keyup', setName);
// nameD.addEventListener('blur', setName);

focusD.addEventListener("mouseup", setFocusZero);
nameD.addEventListener("mouseup", setNameZero);

nextQuoteD.addEventListener("mouseup", quote);

buttonRightD.addEventListener("mouseup", test0);
buttonLeftD.addEventListener("mouseup", test1);





nextImageHour(i,0,1);
showTime();
weather()
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

