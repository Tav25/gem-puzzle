import * as game from './Game';
import * as gameSound from './gameSound';

export { menuGame };

const menuGame = {
  gameSize: 4,

  initMenu() {
    document.querySelector('body > div.wrapper > div.wrapper-gamebox').innerHTML = `
    <div class='wrapper-gamebox-menu'>
    <div class='wrapper-gamebox-menu-box1'>
        <div class='wrapper-gamebox-menu-box1-newGame' id='newGame'>new game</div>
        <div class='wrapper-gamebox-menu-box1-boxSize' id='boxSize'><span class = 'color5' id = 'sizeDown'><</span> 4<span class = 'color5'>x</span>4 <span class = 'color5' id = 'sizeUp'>></span></div>
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
    document.querySelector('#sizeDown').addEventListener('mouseup', (e) => { console.log('down'); });
    document.querySelector('#sizeUp').addEventListener('mouseup', (e) => { console.log('up'); });
    document.querySelector('#sound').addEventListener('mouseup', (e) => {
      console.log('sound');
      gameSound.playSoundGame.soundOffOn();
      document.querySelector('#sound > span').innerHTML = gameSound.playSoundGame.soundOn;
    });
    // .addEventListener('mouseup', (e) => { console.log('') });
    // .addEventListener('mouseup', (e) => { console.log('') });
  },

};
