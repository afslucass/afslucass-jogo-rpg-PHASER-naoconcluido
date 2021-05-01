
import EnemiesResources from '../assets/sprites/enemies.png'
import PlayerResources from '../assets/sprites/player.png'
import TilesetResources from '../assets/map/tileset.png'

import MapResources from '../assets/map/mapExported3.json'
import Player from './Game/Sprites/Player'
import Enemy from './Game/Sprites/Enemy'

import { playerAnims } from './Game/Anims/playerAnims'
import { enemyAnims } from './Game/Anims/enemyAnims'

class Game extends Phaser.Scene {

    constructor() {
        super({
            key: 'Game',
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                    gravity: {
                        x: 0,
                        y: 0
                    }
                }
            },
        })
    }

    preload() {
        this.load.spritesheet('player', PlayerResources, {
            frameWidth: 10,
            frameHeight: 10
        })
        this.load.spritesheet('enemies', EnemiesResources, {
            frameWidth: 52,
            frameHeight: 72
        })
        this.load.tilemapTiledJSON('map', MapResources)
        this.load.image('tiles', TilesetResources)
    }

    create() {
        
        playerAnims.setPlayerAnims(this, 'player')
        enemyAnims.setEnemyAnims(this, 'enemies')
        
        this.map = this.add.tilemap('map')
        
        this.tileset = this.map.addTilesetImage('tileset3', 'tiles', 32, 32)
        
        this.layer1 = this.map.createLayer('Camada de Tiles 1', this.tileset)
        this.layer1.setScale(2, 2)
        this.layer2 = this.map.createLayer('Camada de Tiles 2', this.tileset)
        this.layer2.setScale(2, 2)

        this.player = new Player(this, 200, 200, 'player', 1)

        this.enemy = new Enemy(this, 600, 450, 'enemies', 1, this.player)

        this.layer3 = this.map.createLayer('Camada de Tiles 3', this.tileset)
        this.layer3.setScale(2, 2)
        
        this.layer1.setCollisionByProperty({ collides: true })
        this.layer2.setCollisionByProperty({ collides: true })
        this.layer3.setCollisionByProperty({ collides: true })
        
        this.physics.add.collider(this.player, this.layer1, null, null, this)
        this.physics.add.collider(this.player, this.layer2, null, null, this)
        this.physics.add.collider(this.player, this.layer3, null, null, this)
        
        this.physics.add.collider(this.player, this.enemy, null, null, this)
        
        this.physics.add.collider(this.enemy, this.layer1, null, null, this)
        this.physics.add.collider(this.enemy, this.layer2, null, null, this)
        this.physics.add.collider(this.enemy, this.layer3, null, null, this)

        this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
        this.cameras.main.setBounds(0, 0, 6400, 6400)
    }

    update(time, delta) {
        
    }
}

export default Game
