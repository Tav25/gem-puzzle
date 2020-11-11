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
}

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function show() {
  await sleepNow(1000);
  ad(12, 0);
  await sleepNow(1000);
  ad(11, 0);
  await sleepNow(1000);
  ad(10, 0);
  await sleepNow(1000);
  ad(9, 0);
  await sleepNow(1000);
  ad(5, 0);
  await sleepNow(1000);
  ad(6, 0);
//   await sleepNow(1000);
//   ad(2, 0);
//   await sleepNow(1000);
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
