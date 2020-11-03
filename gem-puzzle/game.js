function cl(x) { console.log(x) }

let game = {
    move: 0,
    col: 4,
    gamePole:
        [1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 0],


    movePoint() {
        document.querySelector("#movesJS").innerHTML = this.move
    },

    initBox() {
        cl("init")
        document.querySelector('body').innerHTML = `
        <div class="wrapper">
        <div class="wrapper-text">
            <div class="wrapper-text-time"> <span>00:00</span> </div>
            <div class="wrapper-text-menu">menu</div>
            <div class="wrapper-text-move">moves: <span id="movesJS">0</span></div>
        </div>
        <div class="wrapper-gamebox">
            <div id="cellId0" class="wrapper-gamebox-cell"></div>
            <div id="cellId1" class="wrapper-gamebox-cell"></div>
            <div id="cellId2" class="wrapper-gamebox-cell"></div>
            <div id="cellId3" class="wrapper-gamebox-cell"></div>
            <div id="cellId4" class="wrapper-gamebox-cell"></div>
            <div id="cellId5" class="wrapper-gamebox-cell"></div>
            <div id="cellId6" class="wrapper-gamebox-cell"></div>
            <div id="cellId7" class="wrapper-gamebox-cell"></div>
            <div id="cellId8" class="wrapper-gamebox-cell"></div>
            <div id="cellId9" class="wrapper-gamebox-cell"></div>
            <div id="cellId10" class="wrapper-gamebox-cell"></div>
            <div id="cellId11" class="wrapper-gamebox-cell"></div>
            <div id="cellId12" class="wrapper-gamebox-cell"></div>
            <div id="cellId13" class="wrapper-gamebox-cell"></div>
            <div id="cellId14" class="wrapper-gamebox-cell"></div>
            <div id="cellId15" class="wrapper-gamebox-cell"></div>
        </div>
        
    </div>
        `
    },

    initNumbers() {
        for (i in this.gamePole) {
            cl(this.gamePole[i])
            if (this.gamePole[i] !== 0)
                document.querySelector("#cellId" + i).innerHTML = `<div id = 'number${this.gamePole[i]}' class="wrapper-gamebox-cell-number"><span>${this.gamePole[i]}</span></div>`
                else{
                    cl("добавляем свойства к ячейкам " + i)
                }
        }
    }


}

game.initBox()
game.initNumbers()

//<div class="wrapper-gamebox-cell-number"><span>1</span></div>