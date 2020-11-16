import * as saveG from './save';

export { gameTime, toStrTimer, zero };

const toStrTimer = (second) => `${zero(Math.floor(second / 60))}:${zero(second % 60)}`;
const zero = (x) => { if (x < 10) { return x = `0${x}`; } return x; };

const gameTime = {

  second: 0,
  oneSecond: 0,

  pauseStart() { this.oneSecond = 0; },
  pauseStop() { this.oneSecond = 1; },
  secondReset() { this.second = 0; },

  initTime(x = '00:00') {
    document.querySelector('body > div.wrapper > div.wrapper-text > div.wrapper-text-time').innerHTML = x;
  },

  timer() {
    // const zero = (x) => { if (x < 10) { return x = `0${x}`; } return x; };
    setInterval(() => {
      // console.log('this.second=', gameTime.second)
      const strTimer = toStrTimer(gameTime.second);
      gameTime.initTime(strTimer);
      //   console.log(gameTime.second);
      gameTime.second += gameTime.oneSecond;
      saveG.gameSave.addRecordLastGame();
    }, 1000);
  },

};
