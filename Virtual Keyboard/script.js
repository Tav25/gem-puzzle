function cl(x) { console.log(x) }
cl("test")

let keyCaharCodeEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];
let keyCaharCodeEnUp = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63, 32];
let keyCaharCodeRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32]
let keyCaharCodeRuUp = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44, 32]

let keyCodeArray = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8",
    "Digit9", "Digit0", "Minus", "Equal", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
    "KeyP", "BracketLeft", "BracketRight", "Backslash", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK",
    "KeyL", "Semicolon", "Quote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "Space"]
let keyArray = []
let textArea = []

let lang = "ru"
let sound = true
let shift = false
let capsLk = false
let keyShifButtubDown = false

let outText = ""
let keyShow = false

let xPosition = 0

function ledCapsLk() {
    if (capsLk === true) { return " <span class='material-icons flash'>keyboard_capslock</span>" }
    return " <span class='material-icons'>keyboard_capslock</span>"
}


function getKeyToArray(array) {
    document.onkeypress = function (event) {
        array.push(event.code)
        cl(array)
    }
}

function soundFun(){
    if (sound){
        sound = false
        document.querySelector("#soundKey > span").innerHTML = "volume_off"
    }else{
        sound = true
        document.querySelector("#soundKey > span").innerHTML = "volume_up"

    }
}



function playSoundKey() {
    if (sound) {
        if (lang === "ru") {
            audioPath = "assets/sound/mechanical-Keyboard-single-buttonRu.mp3"
        }
        else {
            audioPath = "assets/sound/mechanical-Keyboard-single-buttonEn.mp3"
        }
        const audio = new Audio(audioPath);
        audio.play();
    }
}


function makeKey(array) {
    let outKey = ""
    let dopClass = ""
    for (i in array) {

        if (array[i] == 32) { dopClass = "space" }


        if (i == 26) { outKey += "<div class='button medium tech capsLk' data = 'CapsLock' onclick='setCapLk()'>" + ledCapsLk() + "</div>" }
        if (i == 37) { outKey += "<div class='button medium tech shift' data = 'ShiftLeft' onclick='setShift()'>shift</div>" }
        if (i == 47) { outKey += "<div class='button tech lang' onclick='setLanguage()'>" + lang + "</div>" }
        if (i == 47) { outKey += "<div id = 'soundKey' class='button tech lang' onclick='soundFun()'><span class='material-icons'>volume_up</span></div>" }
        if (i == 47) { outKey += "<div id = 'keyboardHide' class='button tech lang' onclick='test()'><span class='material-icons'>keyboard_hide</span></div>" }

        outKey += "<div class='button alf " + dopClass + "' ' data = '" + keyCodeArray[i] + "' onclick='keyFlashSound(\"" + keyCodeArray[i] + "\")'>" + String.fromCharCode(array[i]) + "</div>"

        if (i == 12) { outKey += "<div class='button medium tech ' data = 'Backspace' onclick='backspaceKey()'><span class='material-icons'>keyboard_backspace</span></div>" }
        if (i == 36) { outKey += "<div class='button medium tech ' data = 'Enter' onclick='enterKey()'><span class='material-icons'>keyboard_return</span></div>" }
        if (i == 46) { outKey += "<div class='button medium tech shift' data = 'ShiftRight' onclick='setShift()'>shift</div>" }
        if (i == 47) { outKey += "<div class='button tech' data = 'ArrowLeft' onclick='arrowLeftKey()'><span class='material-icons'>keyboard_arrow_left</span></div>" }
        if (i == 47) { outKey += "<div class='button tech' data = 'ArrowRight' onclick='arrowRightKey()'><span class='material-icons'>keyboard_arrow_right</span></div>" }

        if (i == 12 || i == 25 || i == 36 || i == 46) { outKey += "<div class='clearfix'></div>" }
    }
    document.querySelector("body > div.main > div.main-keyboard").innerHTML = outKey
    keyArray = array

    // test()

}


function keyFlashSound(keyCode) {
    document.onclick = function (event) {
        cl(event.target.attributes['data'])
        if (event.target.attributes['data']) {
            cl("dddddddddddddddddddddd")
            makeText(xPosition, event.target.attributes['data'].value)
            playSoundKey()
        }
    }
}


function setLanguage() {
    if (capsLk === false) {
        if (lang === "ru") {
            lang = "en";
            keyArray = keyCaharCodeEn
        } else {
            lang = "ru";
            keyArray = keyCaharCodeRu
        }
    } else {
        if (lang === "en") {
            lang = "ru";
            keyArray = keyCaharCodeRuUp
        } else {
            lang = "en";
            keyArray = keyCaharCodeEnUp
        }
    }
    makeKey(keyArray)
    document.querySelector("body > div.main > div.main-keyboard > div.button.lang").innerHTML = lang
    playSoundKey()

}

function setCapLk() {
    if (capsLk === false) {
        capsLk = true
        if (lang === "ru") { keyArray = keyCaharCodeRuUp } else { keyArray = keyCaharCodeEnUp }
    } else {
        capsLk = false
        if (lang === "ru") { keyArray = keyCaharCodeRu } else { keyArray = keyCaharCodeEn }
    }
    makeKey(keyArray)
}

function setShift() {
    setCapLk()
}

function enterKey() {
    cl("-Enter")
    outText = (outText.substr(0, x) + "\n" + outText.substr(x));
    index()
}

function backspaceKey() {
    cl("-Backspace")
    outText = (outText.substr(0, x - 1) + outText.substr(x));
    index()
}

function arrowLeftKey() {
    cl("-ArrowLeft")
    if (xPosition < outText.length) { xPosition++ }
    index()
}

function arrowRightKey() {
    cl("-ArrowRight")
    if (xPosition > 0) { xPosition-- }
    index()
}

// const str = 'Mozilla';
// let x=str.length - 5
// let text = "W"
// console.log(str.substr(0, x) + text +str.substr(x));

function makeText(x, text = "") {

    cl(`  -${text}- ${keyArray[keyCodeArray.indexOf(text)]}  ${textArea}`)
    if (keyCodeArray.indexOf(text) > -1) {
        text = String.fromCharCode(keyArray[keyCodeArray.indexOf(text)]);
        x = outText.length - xPosition
        outText = (outText.substr(0, x) + text + outText.substr(x));

        index()
    }


}

function index() {
    x = outText.length - xPosition
    document.querySelector("body > div.main > div.main-inputText").innerHTML = (outText.substr(0, x) + '<span class="blink">|</span>' + outText.substr(x))
}


// getKeyToArray(keyCodeArray)
// playSoundKey()

// makeKey(keyCaharCodeEnUp)
// makeKey(keyCaharCodeEn)
// makeKey(keyCaharCodeRuUp)

// keyFlashSound()
makeKey(keyCaharCodeRu)
// makeText()
// mouseAndKeyTextEvent()

// keysTech()



document.addEventListener('keydown', (event) => {
    if (keyShow){
    playSoundKey()

    cl(event.code)
    makeText(xPosition, event.code)

    document.querySelector("body > div.main > div.main-keyboard > div.button[data = '" + event.code + "']").classList.add("flash")
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") { cl("-ShiftLeftD"); setShift() }

    // "CapsLock", "ShiftLeft", "ShiftRight", "Enter", "Backspace", "ArrowLeft", "ArrowRight"]

    if (event.code === "CapsLock") { cl("-CapsLock"); setCapLk() }

    if (event.code === "Enter") { enterKey() }

    if (event.code === "Backspace") { backspaceKey() }

    if (event.code === "ArrowLeft") { arrowLeftKey() }

    if (event.code === "ArrowRight") { arrowRightKey() }

    // text = String.fromCharCode(keyArray[keyCodeArray.indexOf(event.code)]);
    // outText +=text
    // document.querySelector("body > div.main > div.main-inputText").innerHTML = outText + '<span class="blink">|</span>'
    }

})

document.addEventListener('keyup', (event) => {
    document.querySelector("body > div.main > div.main-keyboard > div.button[data = '" + event.code + "']").classList.remove("flash")
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") { cl("-ShiftLeftU"); setShift() }


})


// document.querySelector("body > div.main > div.main-keyboard > div.button").addEventListener('mouseup', (event) => {
//     playSoundKey()

//     cl(event)

// })


function test(){

    document.querySelector("#main-keyboardId").classList.remove("keyboard--show")
    keyShow = false
    document.querySelector("body > div.main > div.main-inputText > span").remove("blink")
  
}

document.querySelector("body > div.main > div.main-inputText").onclick = function() {

    keyShow = true
    document.querySelector("#main-keyboardId").classList.add("keyboard--show")
    index()
}
