import css from './style.css';
import * as game from './Game';
import * as timer from './Timer';
import * as menu from './Menu';
import * as saveG from './save';

game.gameX.initBox();
if (saveG.gameSave.lastGame.endGame) {
  game.gameX.newGame();
} else { game.gameX.newLastGame(); }
game.gameX.initGameCell();
game.gameX.initNumbers();
game.gameX.initZeroPoint();

timer.gameTime.initTime();
timer.gameTime.timer();

menu.menuGame.initTopMenu();
