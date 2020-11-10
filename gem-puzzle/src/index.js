import css from './style.css';
import * as game from './Game';

console.log(`index8${game.g}`);

game.gameX.initBox();

game.gameX.initGameCell();
game.gameX.initNumbers();
game.gameX.initZeroPoint();
game.gameX.gamePoleZeroMove(13);
game.gameX.initGameCell();
game.gameX.initNumbers();
game.gameX.gamePoleZeroMove(10);
game.gameX.initGameCell();
game.gameX.initNumbers();

game.test.moveDown();
console.log(game.gameX.zeroPosition);
console.log(game);
