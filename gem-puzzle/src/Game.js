import * as timer from './Timer';
import * as gameSound from './gameSound';

export { g, gameX };

const zero = (x) => { if (x < 10) { return x = `0${x}`; } return x; };

const gameX = {
  move: 0,
  col: 4,
  gamePole: [],
  movedNumber: [],
  get col2() { return this.col * this.col; },
  get cellHeightWidth() { return 90 / this.col; },
  get numberFontSize() { const size = [8, 4, 2.5, 2, 1.5, 1.3]; return size[this.col - 3]; },

  upGameCol() {
    if (this.col < 8) {
      this.col += 1;
      this.newGame();
    }
  },

  downGameCol() {
    if (this.col > 3) {
      this.col -= 1;
      this.newGame();
    }
  },

  gamePoleIndex() {
    this.gamePole = [];
    const cv = this.col2;
    let w = Array.from(Array(cv).keys());
    w = w.slice(1, cv);
    w.push(0);
    return w;
  },

  newGame() {
    this.gamePole = this.gamePoleIndex();
    timer.gameTime.second = 0;
    this.move = 0;
    this.movePoint(0);
    // this.initBox();
    // this.initGameCell();
    // this.initNumbers();
    // this.initZeroPoint();
  },

  get zeroPosition() { return this.gamePole.indexOf(0); },

  gamePoleZeroMove(a) {
    const arr = this.gamePole;
    const x = arr.indexOf(a);
    const y = arr.indexOf(0);
    arr[x] = arr.splice(y, 1, arr[x])[0];
    // console.log(arr);
  },

  movePoint(x = 1) {
    this.move += x;
    document.querySelector('#movesJS').innerHTML = zero(this.move);
  },

  initBox() {
    document.querySelector('body').innerHTML = `
    <div class="wrapper">
    <div class="wrapper-text">
    <div class="wrapper-text-time">00:00</div>
    <div class="wrapper-text-menu menu">Meny</div>
    <div class="wrapper-text-move">moves: <span id="movesJS">00</span></div> 
    </div>
    <div class="wrapper-gamebox">            
    </div>
    <div class="wrapper-pause">pause</div>        
    </div>
    `;
  },

  initGameCell() {
    const g = '<div class="wrapper-gamebox-cell"></div>';
    let f = '';
    for (let i = 0; i < this.col * this.col; i++) {
      f += `<div id= "cellId${i}" class="wrapper-gamebox-cell" style="height:${this.cellHeightWidth}%; width:${this.cellHeightWidth}%; "></div>`;
    }
    document.querySelector('body > div.wrapper > div.wrapper-gamebox').innerHTML = f;
  },

  async randomize() {
    for (let i = 1000; i > 0; i--) {
      const randomElement = this.movedNumber[Math.floor(Math.random() * this.movedNumber.length)];
      // await sleepNow(1)
      await this.gamePoleZeroMove(randomElement);
      // await this.initGameCell();
      // await this.initNumbers();
      await this.initZeroPointForRandom();
      // if (this.movedNumber[0] === 1 ) {
      //   console.log(i)
      //   break
      //   console.log('5555')
      // };
    }
    this.initGameCell();
    this.initNumbers();
    this.initZeroPoint();
  },

  initNumbers() {
    // console.log('cl');
    for (const i in this.gamePole) {
      if (this.gamePole[i] !== 0) {
        document.querySelector(`#cellId${i}`).innerHTML = `
      <div id = 'number${this.gamePole[i]}' class="wrapper-gamebox-cell-number" draggable="true" ><span style="font-size: ${this.numberFontSize}rem;">${this.gamePole[i]}</span></div>`;
      } else {
        // cl(`добавляем свойства к ячейкам ${i}`);
        document.querySelector(`#cellId${i}`).classList.add('mystyle_cell');
      }
    }
  },

  initZeroPoint() {
    this.movedNumber = [];
    const zeroPositionCell = (this.gamePole.indexOf(0));
    // cl(`cell:${zeroPositionCell}`);

    if (zeroPositionCell - this.col >= 0) {
      const dg = (zeroPositionCell - this.col);
      this.movedNumber.push(this.gamePole[dg]);
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.update(dg);
      });
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mousedown', (e) => {
        this.dragAndDrop(document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`), dg);
      });
    }
    if ((zeroPositionCell + 1) % this.col !== 0) {
      const dg = (zeroPositionCell + 1);
      this.movedNumber.push(this.gamePole[dg]);
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.update(dg);
      });
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mousedown', (e) => {
        this.dragAndDrop(document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`), dg);
      });
    }
    if (zeroPositionCell + this.col < this.col2) {
      const dg = (zeroPositionCell + this.col);
      this.movedNumber.push(this.gamePole[dg]);
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', (e) => {
        this.update(dg);
      });
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mousedown', (e) => {
        this.dragAndDrop(document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`), dg);
      });
    }
    if ((zeroPositionCell + 1) % this.col !== 1) {
      const dg = (zeroPositionCell - 1);
      this.movedNumber.push(this.gamePole[dg]);
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).classList.add('mystyle');
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mouseup', async (e) => {
        // await sleepNow(2000);// animation
        await this.update(dg);
      });
      document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`).addEventListener('mousedown', (e) => {
        this.dragAndDrop(document.querySelector(`#cellId${dg} > .wrapper-gamebox-cell-number`), dg);
      });
    }
    // console.log(`this.movedNumber = ${this.movedNumber}`);
  },

  initZeroPointForRandom() {
    this.movedNumber = [];
    const zeroPositionCell = (this.gamePole.indexOf(0));
    if (zeroPositionCell - this.col >= 0) {
      const dg = (zeroPositionCell - this.col);
      this.movedNumber.push(this.gamePole[dg]);
    }
    if ((zeroPositionCell + 1) % this.col !== 0) {
      const dg = (zeroPositionCell + 1);
      this.movedNumber.push(this.gamePole[dg]);
    }
    if (zeroPositionCell + this.col < this.col2) {
      const dg = (zeroPositionCell + this.col);
      this.movedNumber.push(this.gamePole[dg]);
    }
    if ((zeroPositionCell + 1) % this.col !== 1) {
      const dg = (zeroPositionCell - 1);
      this.movedNumber.push(this.gamePole[dg]);
    }
    // console.log(`this.movedNumber = ${this.movedNumber}`);
  },

  update(x) {
    // cl('UPDATE');
    this.gamePoleZeroMove(this.gamePole[x]);
    this.initGameCell();
    this.initNumbers();
    this.initZeroPoint();
    this.movePoint();
    // timer.gameTime.oneSecond = 1;
    gameSound.playSoundGame.playSound();
  },

  dragAndDrop(card, x) {
    // console.log('const dragAndDrop = () => {');
    // const card = document.querySelector('.mystyle');
    const cells = document.querySelectorAll('.mystyle_cell');
    const dragStart = function () { setTimeout(() => { this.classList.add('hide'); }, 0); };
    const dragEnd = function () { this.classList.remove('hide'); };
    const dragOver = function (evt) { evt.preventDefault(); };
    const dragEnter = function (evt) { evt.preventDefault(); };
    const dragDrop = function () { this.append(card); gameX.update(x); };
    cells.forEach((cell) => {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('drop', dragDrop);
    });
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  },

};
/// //////////////////////////////////////////////////////////////////////////////////////////////////////

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let g = 10;
function cl(x) { console.log(x); }
