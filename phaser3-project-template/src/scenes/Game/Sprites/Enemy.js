
class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, player) {
        super(scene, x, y, texture, frame)

        this.player = player
        this.scene = scene
        this.detectionRect = null
        this.timerPatrol = null
        this.speedValue = 0
        this.nextMoveX = 0
        this.nextMoveY = 0


        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.detectionRect = scene.add.rectangle(this.x, this.y, 500, 500, 0x000, 0.5)

        scene.add.existing(this.detectionRect);
        scene.physics.add.existing(this.detectionRect);

        this.anims.play('parado_enemy')

        this.timerPatrol = scene.time.addEvent({
            delay: 10000,             
            callback: this.moveRound,
            args: [scene, 'PATROL'],
            callbackScope: this,
            loop: true
        });
    }

    // inimigo consegue empurrar o player contra a pedra e bugar o player na pedra

    moveRound(scene, state) {
        this.moveRoundFlag = true

        if(state == 'PATROL') {

            this.speedValue = 50
            let this_x = this.x
            let this_y = this.y
    
            let outOfWorldBoundsFlag = true
            while(outOfWorldBoundsFlag) {
                this.nextMoveX = Phaser.Math.Between(-500, 500) + this_x
                this.nextMoveY = Phaser.Math.Between(-500, 500) + this_y 
    
                if(this.nextMoveX > 0 && this.nextMoveX < 6400 && this.nextMoveY > 0 && this.nextMoveY < 6400) {
                    outOfWorldBoundsFlag = false
                }
            }
        } else if (state == 'ALERT') {
            this.speedValue = 100
            this.nextMoveX = this.player.x
            if(this.player.y > this.y) {
                this.nextMoveY = this.player.y-35
            } else {
                this.nextMoveY = this.player.y+5
            }
        } else if(state == 'STOP') {
            this.speedValue = 0
        }

    }

    preUpdate(time, delta) {

        super.preUpdate(time, delta)

        if(Phaser.Geom.Rectangle.Overlaps(this.detectionRect.getBounds(), this.player.getBounds())) {
            this.timerPatrol.paused = true
            this.moveRound(this.scene, 'ALERT')
            this.moveRoundFlag = false
        } else {
            this.timerPatrol.paused = false
            if(!this.moveRoundFlag) {
                this.moveRound(this.scene, 'STOP')
            }
            
        }

        if(this.y > (this.nextMoveY + 50)) {
            this.setVelocityY(this.speedValue * -1)
        } else if(this.y < (this.nextMoveY - 50)) {
            this.setVelocityY(this.speedValue)
        } else {
            this.setVelocityY(0)
        }

        if(this.x > (this.nextMoveX + 50)) {
            this.setVelocityX(this.speedValue * -1)
        } else if(this.x < (this.nextMoveX - 50)) {
            this.setVelocityX(this.speedValue)
        } else {
            this.setVelocityX(0)
        }

        if(this.body.velocity.y == this.speedValue * -1 || (this.body.velocity.y == this.speedValue * -1 && this.body.velocity.x == this.speedValue * -1) || (this.body.velocity.y == this.speedValue * -1 && this.body.velocity.x == this.speedValue)) {
            this.play('cima_enemy', true)
        } else if(this.body.velocity.y == this.speedValue || (this.body.velocity.y == this.speedValue && this.body.velocity.x == this.speedValue * -1) || (this.body.velocity.y == this.speedValue && this.body.velocity.x == this.speedValue)) {
            this.play('baixo_enemy', true)
        }
        if(this.body.velocity.x == this.speedValue * -1 && this.body.velocity.y == 0) {
            this.play('esquerda_enemy', true)
        } else if(this.body.velocity.x == this.speedValue && this.body.velocity.y == 0) {
            this.play('direita_enemy', true)
        }

        if(this.body.velocity.x == 0 && this.body.velocity.y == 0) {
            this.play('parado_enemy', true)
        }
        
        // Nao esta funcionando
        if (this.body.blocked.none == false) {
            this.body.setImmovable(true)
        } else {
            this.body.setImmovable(false)
        }
        
        this.detectionRect.x = this.x
        this.detectionRect.y = this.y

    }
}

export default Enemy