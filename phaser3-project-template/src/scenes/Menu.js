
import Player from '../assets/sprites/player.png'

class Menu extends Phaser.Scene {

    constructor() {
        super({
            key: 'Menu',
            physics: {
                default: false
            }
        })
    }

    preload() {
        this.load.spritesheet('player', Player, {
            frameWidth: 100,
            frameHeight: 100
        })
    }

    create() {
        this.cameras.main.setBackgroundColor('0x111')

        this.textIniciar = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Iniciar', {
            fontSize: '32px',
            color: '#EEE'
        })
        this.textIniciar.setOrigin(0.5, 0.5)

        this.textCreditos = this.add.text(this.scale.width / 2, this.scale.height / 1.75, 'Créditos', {
            fontSize: '32px',
            color: '#EEE'
        })
        this.textCreditos.setOrigin(0.5, 0.5)

        this.player = this.add.sprite(200, this.scale.height / 2, 'player', 2)

        this.anims.create({
            key: 'olhando',
            frames: this.anims.generateFrameNumbers('player', {
                start: 36,
                end: 41,
            }),
            repeat: -1,
            frameRate: 1
        })
        this.player.anims.play('olhando')

        this.textIniciar.setInteractive()
        this.textIniciar.on('pointerover', () => {
            this.textIniciar.setColor('#666')
        }, this)
        this.textIniciar.on('pointerout', () => {
            this.textIniciar.setColor('#EEE')
        }, this)
        this.textIniciar.on('pointerdown', () => {
            this.scene.start('Game')
        }, this)

        this.textCreditos.setInteractive()
        this.textCreditos.on('pointerover', () => {
            this.textCreditos.setColor('#666')
        }, this)
        this.textCreditos.on('pointerout', () => {
            this.textCreditos.setColor('#EEE')
        }, this)
        this.textCreditos.on('pointerdown', () => {
            this.scene.start('Creditos')
        }, this)

    }
    
    update(time, delta) {

    }
}

export default Menu