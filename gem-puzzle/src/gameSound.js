export { playSoundGame };

let playSoundGame = {
    soundOn: 'on',
    soundOffOn() {
        if (this.soundOn === 'on') {
            this.soundOn = 'off';
        } else {
            this.soundOn = 'on';
        }
        this.playSound()
        return this.soundOn;
    },

    playSound() {
        if (this.soundOn === 'on') {
            const audio = new Audio('./assetc/Arcade Action 06.wav');
            audio.play();
        }
    },
};



