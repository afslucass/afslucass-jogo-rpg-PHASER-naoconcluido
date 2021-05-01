
function setPlayerAnims(scene, texture) {
    
    scene.anims.create({
        key: 'parado',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 36,
            end: 41
        }),
        repeat: -1,
        frameRate: 2
    })
    scene.anims.create({
        key: 'cima',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 24,
            end: 29
        }),
        repeat: -1,
        frameRate: 15
    })
    scene.anims.create({
        key: 'baixo',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 18,
            end: 23,
        }),
        repeat: -1,
        frameRate: 15
    })
    scene.anims.create({
        key: 'direita',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 6,
            end: 11
        }),
        repeat: -1,
        frameRate: 15
    })
    scene.anims.create({
        key: 'esquerda',
        frames: scene.anims.generateFrameNumbers(texture, {
            start: 0,
            end: 5,
        }),
        repeat: -1,
        frameRate: 15
    })

}

exports.playerAnims = {
    setPlayerAnims
}