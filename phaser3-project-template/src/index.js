import Phaser from 'phaser';
import Menu from './scenes/Menu'
import Game from './scenes/Game'
import Pause from './scenes/Pause'
import Creditos from './scenes/Creditos'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ Menu, Game, Pause, Creditos]
};

const game = new Phaser.Game(config);
