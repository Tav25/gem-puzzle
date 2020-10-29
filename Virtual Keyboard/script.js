function cl(x) { console.log(x) }
cl("test")

let keyCaharCodeEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];
let keyCaharCodeEnUp = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63, 32];
let keyCaharCodeRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32]
let keyCaharCodeRuUp = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44, 32]
let keyCodeArray = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "Space"]

let textArea = []

let lang = "ru"
let shift = false

let text = "hello world"


function getKeyToArray(array) {
    document.onkeypress = function (event) {
        array.push(event.code)
        cl(array)
    }
}

function playSoundKey() {
    if (lang === "ru") { audioPath = "/Virtual Keyboard/assets/sound/mechanical-Keyboard-single-buttonRu.mp3" }
    else {
        audioPath = "/Virtual Keyboard/assets/sound/mechanical-Keyboard-single-buttonEn.mp3"
    }
    const audio = new Audio(audioPath);
    audio.play();
}


function makeKey(array) {
    let outKey = ""
    let dopClass = ""
    for (i in array) {

        if (array[i] == 32) { dopClass = "space" }


        if (i == 37) { outKey += "<div class='button medium tech shift' onclick='setShift()'>shift</div>" }
        if (i == 26) { outKey += "<div class='button medium tech ' onclick=''>capsLk</div>" }
        if (i == 47) { outKey += "<div class='button tech lang' onclick='setLanguage()'>" + lang + "</div>" }

        outKey += "<div class='button " + dopClass + "' ' data = '" + keyCodeArray[i] + "' onclick='keyFlashSound(\"" + keyCodeArray[i] + "\")'>" + String.fromCharCode(array[i]) + "</div>"

        if (i == 12) { outKey += "<div class='button medium tech ' onclick=''>backspace</div>" }
        if (i == 36) { outKey += "<div class='button medium tech ' onclick=''>enter</div>" }
        if (i == 46) { outKey += "<div class='button medium tech shift' onclick='setShift()'>shift</div>" }
        if (i == 47) { outKey += "<div class='button tech' onclick=''>←</div>" }
        if (i == 47) { outKey += "<div class='button tech' onclick=''>→</div>" }

        if (i == 12 || i == 25 || i == 36 || i == 46) { outKey += "<div class='clearfix'></div>" }
    }
    document.querySelector("body > div.main > div.main-keyboard").innerHTML = outKey
}


function keyFlashSound(keyCode) {
    playSoundKey()

    document.onkeydown = function (event) {
        document.querySelector("body > div.main > div.main-keyboard > div.button[data = '" + event.code + "']").classList.add("flash")
        keyCode = event.code
        cl(keyCode)
    }
    document.onkeyup = function (event) {
        document.querySelector("body > div.main > div.main-keyboard > div.button[data = '" + event.code + "']").classList.remove("flash")
    }
    cl(keyCode)
    makeText(keyCode)

}

function setLanguage() {
    if (shift === false) {
        if (lang === "ru") {
            lang = "en";
            makeKey(keyCaharCodeEn)
        } else {
            lang = "ru";
            makeKey(keyCaharCodeRu)
        }
    } else {
        if (lang === "en") {
            lang = "ru";
            makeKey(keyCaharCodeRuUp)
        } else {
            lang = "en";
            makeKey(keyCaharCodeEnUp)
        }
    }
    document.querySelector("body > div.main > div.main-keyboard > div.button.lang").innerHTML = lang
    playSoundKey()

}

function setShift() {
    if (shift === false) {
        shift = true
        if (lang === "ru") { makeKey(keyCaharCodeRuUp) } else { makeKey(keyCaharCodeEnUp) }
    } else {
        shift = false
        if (lang === "ru") { makeKey(keyCaharCodeRu) } else { makeKey(keyCaharCodeEn) }
    }

    // document.querySelector("body > div.main > div.main-keyboard > div.button.shift").innerHTML = shift
    playSoundKey()

}

function makeText(text) {
    document.querySelector("body > div.main > div.main-inputText").innerHTML = text
}

// getKeyToArray(keyCodeArray)
// playSoundKey()

// makeKey(keyCaharCodeEnUp)
// makeKey(keyCaharCodeEn)
// makeKey(keyCaharCodeRuUp)

// keyFlashSound()

makeKey(keyCaharCodeRu)
makeText()