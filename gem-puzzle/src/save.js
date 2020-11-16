import * as game from './Game';
import * as timer from './Timer';

export { gameSave };

const zero = (x) => { if (x < 10) { return x = `0${x}`; } return x; };

let gameSave = {
  lastGame: {
    endGame: true, move: 0, time: 0, col: 0, gamePole: [], gamePoleEtalon: [],
  },
  // test:'test text',
  point: {
    g3: [{ move: 12, time: 120 }, { move: 7, time: 121 }, { move: 4, time: 121 }, { move: 11, time: 121 }, { move: 3, time: 121 }, { move: 17, time: 121 }, { move: 27, time: 121 }, { move: 31, time: 121 }, { move: 1, time: 121 }, { move: 15, time: 121 }],
    // g3: [],
    g4: [],
    g5: [],
    g6: [],
    g7: [],
    g8: [],
  },

  addRecordToLastGame() {},

  get test() {
    // this.point = localStorage.getItem('pointStorage');
    const positionInArray = game.gameX.colBuffer - 3;
    const size = [this.point.g3, this.point.g4, this.point.g5, this.point.g6, this.point.g7, this.point.g8];
    size[positionInArray].sort((a, b) => a.move - b.move);
    // game.gameX.colBuffer
    let expSave = '';
    for (const i in size[positionInArray]) {
      if (i < 10) {
        expSave = `${expSave}<span>${(i * 1 + 1)}. m: ${zero(size[positionInArray][i].move)} t:${timer.toStrTimer(size[positionInArray][i].time)}</span><br>`; // (size[positionInArray][i].point + ' ' + size[positionInArray][i].time)
      }
      console.log(i);
    }
    return expSave;
  },

  addRecord() {
    const positionInArray = game.gameX.colBuffer - 3;
    const size = [this.point.g3, this.point.g4, this.point.g5, this.point.g6, this.point.g7, this.point.g8];
    size[positionInArray].push({ move: game.gameX.move, time: timer.gameTime.second });
    localStorage.setItem('pointStorage', JSON.stringify(gameSave.point));
  },

  localStorageInit() {
    this.point = JSON.parse(localStorage.getItem('pointStorage'));
  },

  addRecordLastGame() {
    this.lastGame = {
      endGame: game.gameX.endGame, move: game.gameX.move, time: timer.gameTime.second, col: game.gameX.col, gamePole: game.gameX.gamePole, gamePoleEtalon: game.gameX.gamePoleEtalon,
    },
    localStorage.setItem('lastGameStorage', JSON.stringify(gameSave.lastGame));
  },

  localStorageInitLastGame() {
    this.lastGame = JSON.parse(localStorage.getItem('lastGameStorage'));
  },

};

if (localStorage.getItem('lastGameStorage') !== null) {
  gameSave.localStorageInitLastGame();
}

if (localStorage.getItem('pointStorage') !== null) {
  gameSave.localStorageInit();
}

// localStorage.setItem('pointStorage', JSON.stringify(gameSave.point));
// this.point = JSON.parse(localStorage.getItem('pointStorage'));

// localStorage.setItem('lastGameStorage', JSON.stringify(gameSave.lastGame));
// this.point = JSON.parse(localStorage.getItem('pointStorage'));
