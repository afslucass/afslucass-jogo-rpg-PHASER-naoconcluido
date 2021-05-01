
function setEnemyAnims(scene, texture) {
    
    scene.anims.create({
        key: 'parado_enemy',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 7,
            end: 7
        }),
        repeat: -1,
        frameRate: 1
    })
    scene.anims.create({
        key: 'cima_enemy',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 42,
            end: 44
        }),
        repeat: -1,
        frameRate: 10
    })
    scene.anims.create({
        key: 'baixo_enemy',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 6,
            end: 8,
        }),
        repeat: -1,
        frameRate: 10
    })
    scene.anims.create({
        key: 'direita_enemy',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 30,
            end: 32
        }),
        repeat: -1,
        frameRate: 10
    })
    scene.anims.create({
        key: 'esquerda_enemy',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 18,
            end: 20,
        }),
        repeat: -1,
        frameRate: 10
    })

}

exports.enemyAnims = {
    setEnemyAnims
}