export { g, gameX, test };
let g = 10;

function cl(x) { console.log(x); }

const gameX = {
  move: 0,
  col: 4,
  gamePole: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
  movedNumber: [],

  // get gamePole() { return [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15]; },

  get zeroPosition() { return this.gamePole.indexOf(0); },

  gamePoleZeroMove(a) {
    const arr = this.gamePole;
    const x = arr.indexOf(a);
    const y = arr.indexOf(0);
    arr[x] = arr.splice(y, 1, arr[x])[0];
    console.log(arr);
  },

  movePoint() {
    document.querySelector('#movesJS').innerHTML = this.move;
  },

  initBox() {
    cl('init');
    document.querySelector('body').innerHTML = `
        <div class="wrapper">
        <div class="wrapper-text">
            <div class="wrapper-text-time"> <span>00:00</span> </div>
            <div class="wrapper-text-menu"> <span>1</span> <span>2</span> <span>3</span> </div>
            <div class="wrapper-text-move">moves: <span id="movesJS">0</span></div> 
        </div>
        <div class="wrapper-gamebox">            
        </div>        
    </div>
        `;
  },

  initGameCell() {
    console.log('initGameCell()');
    const g = '<div class="wrapper-gamebox-cell"></div>';
    let f = '';
    for (let i = 0; i < this.col * this.col; i++) {
      f += `<div id= "cellId${i}" class="wrapper-gamebox-cell"></div>`;
    }
    document.querySelector('body > div.wrapper > div.wrapper-gamebox').innerHTML = f;
  },

  initNumbers() {
    console.log('cl');
    for (const i in this.gamePole) {
      // cl(this.gamePole[i]);
      if (this.gamePole[i] !== 0) { document.querySelector(`#cellId${i}`).innerHTML = `<div id = 'number${this.gamePole[i]}' class="wrapper-gamebox-cell-number" " ><span>${this.gamePole[i]}</span></div>`; } else {
        cl(`добавляем свойства к ячейкам ${i}`);
      }
    }
  },

  initZeroPoint() {
    const zeroPositionCell = (this.gamePole.indexOf(0));
    cl(`cell:${zeroPositionCell}`);
    if (zeroPositionCell - 4 >= 0) {
      cl(`y0 ${zeroPositionCell - 4}`);
      document.querySelector(`#cellId${zeroPositionCell - 4} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${zeroPositionCell - 4} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.gamePoleZeroMove(this.gamePole[zeroPositionCell - 4]);
        this.initGameCell();
        this.initNumbers();
        this.initZeroPoint();
      });
    }
    if ((zeroPositionCell + 1) % 4 !== 0) {
      cl(`y1 ${zeroPositionCell + 0}`);
      document.querySelector(`#cellId${zeroPositionCell + 1} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${zeroPositionCell + 1} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.gamePoleZeroMove(this.gamePole[zeroPositionCell + 1]);
        this.initGameCell();
        this.initNumbers();
        this.initZeroPoint();
      });
    }
    if (zeroPositionCell + 4 < 16) {
      cl(`y2 ${zeroPositionCell + 4}`);
      document.querySelector(`#cellId${zeroPositionCell + 4} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${zeroPositionCell + 4} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.gamePoleZeroMove(this.gamePole[zeroPositionCell + 4]);
        this.initGameCell();
        this.initNumbers();
        this.initZeroPoint();
      });
    }
    if ((zeroPositionCell + 1) % 4 !== 1) {
      cl(`P y3 ${zeroPositionCell - 1}`);
      document.querySelector(`#cellId${zeroPositionCell - 1} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${zeroPositionCell - 1} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.gamePoleZeroMove(this.gamePole[zeroPositionCell - 1]);
        this.initGameCell();
        this.initNumbers();
        this.initZeroPoint();
      });
    }
  },

};

class NumberBut {
  moveUp() { cl('up'); }

  moveDown() { cl('Down'); }

  moveLeft() { cl('Left'); }

  moveRight() { cl('Right'); }
}

let test = new NumberBut();

// document.querySelector(`#cellId${zeroPositionCell - 1}`).classList.add('animated');
// document.querySelector(`#cellId${zeroPositionCell - 1} > .wrapper-gamebox-cell-number`).style.marginTop = '100px';
