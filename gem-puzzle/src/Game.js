export { g, gameX }
let g = 10

function cl(x) { console.log(x); }

const gameX = {
  move: 0,
  col: 4,



  get gamePole(){ return  [1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]},

  movePoint() {
    document.querySelector('#movesJS').innerHTML = this.move;
  },

  initBox() {
    cl('init');
    document.querySelector('body').innerHTML = `
        <div class="wrapper">
        <div class="wrapper-text">
            <div class="wrapper-text-time"> <span>00:00</span> </div>
            <div class="wrapper-text-menu">menu</div>
            <div class="wrapper-text-move">moves: <span id="movesJS">0</span></div>
        </div>
        <div class="wrapper-gamebox">            
        </div>        
    </div>
        `;
  },

  initGameCell() {
    console.log('initGameCell()')
    let g = `<div class="wrapper-gamebox-cell"></div>`
    let f = ''
    for (let i = 0; i < this.col * this.col; i++) {
      console.log('dsdksjdks4')// ... тело цикла ...
      f = f + `<div id= "cellId${i}" class="wrapper-gamebox-cell"></div>`
    }
    document.querySelector("body > div.wrapper > div.wrapper-gamebox").innerHTML = f

  },

  initNumbers() {
    console.log('cl');
    for (const i in this.gamePole) {
      cl(this.gamePole[i]);
      if (this.gamePole[i] !== 0) { document.querySelector(`#cellId${i}`).innerHTML = `<div id = 'number${this.gamePole[i]}' class="wrapper-gamebox-cell-number"><span>${this.gamePole[i]}</span></div>`; } else {
        cl(`добавляем свойства к ячейкам ${i}`);
      }
    }
  },

};

