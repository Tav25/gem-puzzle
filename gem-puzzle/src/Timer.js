export {
  gameTime,
};

const gameTime = {

  second: 0,
  oneSecond: 1,

  pauseStart() { this.oneSecond = 0; },
  pauseStop() { this.oneSecond = 1; },
  secondReset() { this.second = 0; },

  initTime(x = '00:00') {
    document.querySelector('body > div.wrapper > div.wrapper-text > div.wrapper-text-time').innerHTML = x;
  },

  timer() {
    const zero = (x) => { if (x < 10) { return x = `0${x}`; } return x; };
    setInterval(() => {
      // console.log('this.second=', gameTime.second)
      const strTimer = `${zero(Math.floor(gameTime.second / 60))}:${zero(gameTime.second % 60)}`;
      gameTime.initTime(strTimer);
      //   console.log(gameTime.second);
      gameTime.second += gameTime.oneSecond;
    }, 1000);
  },

};
