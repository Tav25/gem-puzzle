import * as game from './Game';
import * as gameSound from './gameSound';
import * as timer from './Timer';

export { menuGame };

const menuGame = {

  initTopMenu() {
    let showMenu = false;
    let showPause = false;

    document.querySelector('.menu').addEventListener('mouseup', (e) => {
      if (!showPause) {
        if (!showMenu) {
          timer.gameTime.pauseStart();
          console.log('#top menu');
          this.initMenu();
          this.menuListener();
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

    document.querySelector('body > div.wrapper > div.wrapper-pause').addEventListener('mouseup', (e) => {
      if (!showMenu) {
        if (!showPause) {
          timer.gameTime.pauseStart();
          console.log('#top menu');
          this.initPause();
          document.querySelector('body > div.wrapper > div.wrapper-pause').innerHTML = 'continue';
          showPause = true;
        } else {
          timer.gameTime.pauseStop();
          game.gameX.initGameCell();
          game.gameX.initNumbers();
          game.gameX.initZeroPoint();
          document.querySelector('body > div.wrapper > div.wrapper-pause').innerHTML = 'pause';
          showPause = false;
        }
      }
    });

    document.querySelector('body > div.wrapper > div.wrapper-newGame').addEventListener('mouseup', (e) => {
      console.log('#newGame');
      game.gameX.newGame();
    });
  },

  initMenu() {
    document.querySelector('body > div.wrapper > div.wrapper-gamebox').innerHTML = `
    <div class='wrapper-gamebox-menu'>
    <div class='wrapper-gamebox-menu-box1'>
        <div class='wrapper-gamebox-menu-box1-newGame' id='newGame'>new game</div>
        <div class='wrapper-gamebox-menu-box1-boxSize' id='boxSize'><span class = 'color5' id = 'sizeDown'><</span> <span id="sizShow"> ${game.gameX.colBuffer}<span class = 'color5'>x</span>${game.gameX.colBuffer}</span><span class = 'color5' id = 'sizeUp'> ></span></div>
        <div class='wrapper-gamebox-menu-box1-sound' id='sound'>sound <span class = 'color1 soundOn'>${gameSound.playSoundGame.soundOn}</span></div>
    </div>
    <div class='wrapper-gamebox-menu-box2'>
    <div class='wrapper-gamebox-menu-box2-bestGames' id='bestGames'>best game</div>
    <div class='wrapper-gamebox-menu-box2-bestGamesRez' id='bestGamesRez'>dsnf,sdnffdsfndsfnds,mfnds,nf,dsnf,</div>
    </div>
</div> `;
    console.log('menu');
  },

  initPause() {
    document.querySelector('body > div.wrapper > div.wrapper-gamebox').innerHTML = `
    <div class='wrapper-gamebox-menu'>
    <div class='wrapper-gamebox-menu-box1'>
        <div class='wrapper-gamebox-menu-box1-pause' id='pause'>Pause</div>
    </div>
    <div class='wrapper-gamebox-menu-box2'>
    <div class='wrapper-gamebox-menu-box2-bestGames' id='bestGames'>best game</div>
    <div class='wrapper-gamebox-menu-box2-bestGamesRez' id='bestGamesRez'>dsnf,sdnffdsfndsfnds,mfnds,nf,dsnf,</div>
    </div>
</div> `;
    console.log('menu');
  },

  menuListener() {
    document.querySelector('#newGame').addEventListener('mouseup', (e) => {
      console.log('#newGame');
      game.gameX.newGame();
    });
    document.querySelector('#sizeDown').addEventListener('mouseup', (e) => {
      console.log('down');
      game.gameX.downGameCol();
      document.querySelector('#sizShow').innerHTML = ` ${game.gameX.colBuffer}<span class = 'color5'>x</span>${game.gameX.colBuffer}`;
    });
    document.querySelector('#sizeUp').addEventListener('mouseup', (e) => {
      console.log('up');
      game.gameX.upGameCol();
      document.querySelector('#sizShow').innerHTML = `${game.gameX.colBuffer}<span class = 'color5'>x</span>${game.gameX.colBuffer}`;
    });

    document.querySelector('#sound').addEventListener('mouseup', (e) => {
      console.log('sound');
      gameSound.playSoundGame.soundOffOn();
      document.querySelector('#sound > span').innerHTML = gameSound.playSoundGame.soundOn;
    });
    // .addEventListener('mouseup', (e) => { console.log('') });
    // .addEventListener('mouseup', (e) => { console.log('') });
  },

};
