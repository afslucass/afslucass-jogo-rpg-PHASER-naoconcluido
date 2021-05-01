
class Creditos extends Phaser.Scene {

    constructor() {
        super({
            key: 'Creditos',
            physics: {
                default: false
            }
        })
    }

    preload() {

    }

    create() {
        this.cameras.main.setBackgroundColor('0x111')

        this.textCreditos = this.add.text(this.scale.width / 2, this.scale.height / 3, 'Este Jogo Foi Desenvolvido Por Lucas', {
            fontSize: '18px',
            align: 'justify',
            wordWrap: {
                width: 300
            }
        })
        this.textCreditos.setOrigin(0.5, 0.5)

        this.textVoltar = this.add.text(this.scale.width / 2, this.scale.height / 1.5, 'Voltar', {
            fontSize: '28px',
        })
        this.textVoltar.setOrigin(0.5, 0.5)

        this.textVoltar.setInteractive()
        this.textVoltar.on('pointerover', () => {
            this.textVoltar.setColor('#666')
        }, this)
        this.textVoltar.on('pointerout', () => {
            this.textVoltar.setColor('#EEE')
        }, this)
        this.textVoltar.on('pointerdown', () => {
            this.scene.start('Menu')
        })
    }

    update(time, delta) {
        
    }
}

export default Creditos