import css from './style.css';
import * as game from './Game';
import * as timer from './Timer';
import * as menu from './Menu';

console.log(`index8${game.g}`);

game.gameX.initBox();
game.gameX.newGame();

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
  await sleepNow(msPaus);
  ad(9, 0);
  await sleepNow(msPaus);
  ad(5, 0);
  await sleepNow(msPaus);
  ad(6, 0);
  await sleepNow(msPaus);
  ad(2, 0);
  await sleepNow(msPaus);
  ad(1, 0);
  timer.gameTime.initTime();
  timer.gameTime.timer();
}

show();

let showMenu = false;
let showPause = false;

document.querySelector('.menu').addEventListener('mouseup', (e) => {
  if (!showPause) {
    if (!showMenu) {
      timer.gameTime.pauseStart();
      console.log('#top menu');
      menu.menuGame.initMenu();
      menu.menuGame.menuListener();
      document.querySelector('.menu').innerHTML = 'back';
      showMenu = true;
    } else {
      timer.gameTime.pauseStop();
      game.gameX.initGameCell();
      game.gameX.initNumbers();
      game.gameX.initZeroPoint();
      document.querySelector('.menu').innerHTML = 'Menu';
      showMenu = false;
    }
  }
});


document.querySelector("body > div.wrapper > div.wrapper-pause").addEventListener('mouseup', (e) => {
  if (!showMenu) {
    if (!showPause) {
      timer.gameTime.pauseStart();
      console.log('#top menu');
      menu.menuGame.initPause();
      document.querySelector("body > div.wrapper > div.wrapper-pause").innerHTML = 'continue';
      showPause = true;
    } else {
      timer.gameTime.pauseStop();
      game.gameX.initGameCell();
      game.gameX.initNumbers();
      game.gameX.initZeroPoint();
      document.querySelector("body > div.wrapper > div.wrapper-pause").innerHTML = 'pause';
      showPause = false;
    }
  }
});



// timer.gameTime.pauseStart()
