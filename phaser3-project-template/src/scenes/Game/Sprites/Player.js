
class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Modificar o body, n criar um rectangle para usar como colisor, n é possivel capturar colisao e fixar em um personagem ao mesmo tempo
        this.body.setSize(32, 52, true)
        this.body.offset.x = 35 
        this.body.offset.y = 10

        this.cursors = {}
    }

    movimentacao(player) {  
        
        player.body.velocity.y = 0;
        player.body.velocity.x = 0;

        if(player.cursors.cima.isDown) {
            player.body.velocity.y -= 200;
            player.play('cima', true)
            if (player.cursors.cima.isDown && player.cursors.direita.isDown) {
                player.body.velocity.x += 200;
            } else if (player.cursors.cima.isDown && player.cursors.esquerda.isDown) {
                player.body.velocity.x -= 200;
            }
        }
        else if(player.cursors.baixo.isDown) {
            player.body.velocity.y += 200;
            player.play('baixo', true)
            if (player.cursors.baixo.isDown && player.cursors.direita.isDown) {
                player.body.velocity.x += 200;
            } else if (player.cursors.baixo.isDown && player.cursors.esquerda.isDown) {
                player.body.velocity.x -= 200;
            }
        }
        
        if(player.cursors.esquerda.isDown && !player.cursors.cima.isDown && !player.cursors.baixo.isDown) {
            player.body.velocity.x -= 200;
            player.play('esquerda', true)
        }
        else if(player.cursors.direita.isDown && !player.cursors.cima.isDown && !player.cursors.baixo.isDown) {
            player.body.velocity.x += 200;
            player.play('direita', true)
        } 

        if(!player.cursors.cima.isDown && !player.cursors.baixo.isDown && !player.cursors.esquerda.isDown && !player.cursors.direita.isDown) {
            player.play('parado')
        }
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        this.cursors.cima = this.scene.input.keyboard.addKey('W')
        this.cursors.baixo = this.scene.input.keyboard.addKey('S')
        this.cursors.direita = this.scene.input.keyboard.addKey('D')
        this.cursors.esquerda = this.scene.input.keyboard.addKey('A')
        
        this.movimentacao(this)
        
    }
}

export default Player