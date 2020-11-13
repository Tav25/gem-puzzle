import css from './style.css';
import * as game from './Game';

console.log(`index8${game.g}`);

game.gameX.initBox();

game.gameX.initGameCell();
game.gameX.initNumbers();
game.gameX.initZeroPoint();

function ad(a) {
  game.gameX.gamePoleZeroMove(a);
  game.gameX.initGameCell();
  game.gameX.initNumbers();
  game.gameX.initZeroPoint();
  // game.dragAndDrop();
}

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const msPaus = 300;
async function show() {
  await sleepNow(msPaus);
  ad(12, 0);
  await sleepNow(msPaus);
  ad(11, 0);
  await sleepNow(msPaus);
  ad(10, 0);
  // await sleepNow(msPaus);
  // ad(9, 0);
  // await sleepNow(msPaus);
  // ad(5, 0);
//   await sleepNow(msPaus);
//   ad(6, 0);
//   await sleepNow(msPaus);
//   ad(2, 0);
//   await sleepNow(msPaus);
//   ad(1, 0);
}

show();

// async function repeatedGreetingsLoop() {
//   for (let i = 1; i <= 5; i++) {
//     await sleepNow(1000)
//     console.log(`Hello #${i}`)
//   }
// }

// repeatedGreetingsLoop()
