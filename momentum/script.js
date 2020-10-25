console.log("dd")

const timeD = document.querySelector('.time'),
    dateD = document.querySelector('.date'),
    //   greeting = document.querySelector('.greeting'),
    nameD = document.querySelector('.inputName'),
    focusD = document.querySelector('.focus'),
    quoteD = document.querySelector('.quote'),
    nextQuoteD = document.querySelector('.nextQuote'),
    cityWeather = localStorage.getItem('cityS');

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



let htm = ""
for (let imgh in arrImage) {
    htm = `<img src="assets/images/${arrImage[imgh]}.jpg" style="width: 32px;">` + htm;
    cl(htm)
}
bufferD.innerHTML = htm

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

function slideRight() {
    console.log("Test+" + i)
    nextImageHour2(1)
}

function slideLeft() {
    console.log("Test-" + i)
    nextImageHour2(-1)
}

function cl(v) {
    console.log(v)
}



function nextImageHour(h = 0, m = 0, x = 1) {

    // console.log("nextImageHour h: ")

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



function nextImageHour2(x) {
    i = i + x;
    cl("pered: " + arrImage[i] + ".jpg")
    if (i === 24) { i = 0 }
    if (i === -1) { i = 23 }

    block.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i] + ".jpg')";
    if (arrImage[i + 1]) { bufferD.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i + 1] + ".jpg')"; }
    if (arrImage[i + 2]) { bufferD.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i + 1] + ".jpg')"; }
    if (arrImage[i - 1]) { bufferD.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i + 1] + ".jpg')"; }
    if (arrImage[i - 2]) { bufferD.style.backgroundImage = "url('../momentum/assets/images/" + arrImage[i + 1] + ".jpg')"; }



    cl(i)


}
// console.log(m)

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


function zero(num) {
    if (num < 10) {
        return "0"
    }
    return ""

}


function isSpace(text) {
    let regexp = /\s*$/g;
    // alert( str.search(regexp) );
    if (text.search(regexp) === 0) { return false }
    return true
}

function getCity() {
    cl("+++++GN")
    if (localStorage.getItem('cityS') === null) {
        cityD.textContent = '[Enter city]';
    } else {
        cityD.textContent = localStorage.getItem('cityS');
        weather(localStorage.getItem('cityS'))
    }
}

function setCity() {
    cityD.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            if (!isSpace(cityD.textContent)) { cityD.textContent = localStorage.getItem('cityS'); }
            localStorage.setItem('cityS', cityD.innerText);
            cityD.blur()
            weather(localStorage.getItem('cityS'))
        }
        // else {
        //     localStorage.setItem('cityS', cityD.innerText);
        //     cl("22222222222")
        //     weather(localStorage.getItem('cityS'))
        //     cl("3333333333")
        // }
    });
}


function getName() {
    if (localStorage.getItem('nameS') === null) {
        nameD.textContent = '[Enter Name]';
    }
    else {
        nameD.textContent = localStorage.getItem('nameS');
    }
}

function setName() {
    nameD.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            if (!isSpace(nameD.textContent)) { nameD.textContent = localStorage.getItem('nameS'); }
            localStorage.setItem('nameS', nameD.innerText);
            nameD.blur()
        }
        // else {
        //     localStorage.setItem('nameS', nameD.innerText);
        //     cl("+++++SN+2")
        // }
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
            if (!isSpace(focusD.textContent)) { focusD.textContent = localStorage.getItem('focusS'); }
            localStorage.setItem('focusS', focusD.innerText);
            focusD.blur()
        }
        // else {
        //     localStorage.setItem('focusS', focusD.innerText);
        //     console.log('+++++++++++++++' + localStorage.getItem('focusS'))
        // }
    });

}



function setFocusZero() {
    focusD.innerHTML = '&nbsp;'
}

function setNameZero() {
    nameD.innerHTML = '&nbsp;'
}


function setCityZero() {
    cityD.innerHTML = '&nbsp;'
    // block.addEventListener("mouseup", setFocusZero);
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


function weather(city = cityWeather) {
    // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=en&appid=4cc45adc1d4e95ce710a4c884b625ab0&units=metric', false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        descriptionD.innerHTML = `Error. City not found.`
        temperatureD.innerHTML = "";
        iconD.src = "assets/images/zero.png";
    } else {
        let weatJSon = JSON.parse(xhr.responseText);
        console.log(weatJSon.name); //speed wind
        console.log(weatJSon.weather[0].description); // погода
        console.log(weatJSon.weather[0].icon); // погода icon http://openweathermap.org/img/wn/04n@4x.png
        console.log(weatJSon.main.temp); // temp
        console.log(weatJSon.main.humidity); //humidity
        console.log(weatJSon.wind.speed); //speed wind

        //

        iconD.src = "http://openweathermap.org/img/wn/" + weatJSon.weather[0].icon + "@4x.png"
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
cityD.addEventListener("mouseup", setCityZero);

nextQuoteD.addEventListener("mouseup", quote);

buttonRightD.addEventListener("mouseup", slideRight);
buttonLeftD.addEventListener("mouseup", slideLeft);







nextImageHour(i, 0, 1);
showTime();
weather();

getName();
setName();

getFocus();
setFocus();


getCity()
setCity()

quote();
weather();




// localStorage.removeItem('nameS');
// localStorage.removeItem('focusS');
// localStorage.removeItem('cityS');




