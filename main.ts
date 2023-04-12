controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    attack("range", bolts[randint(0, bolts.length)])
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attack("melee", null)
})
function attack(attackType: string, projectile: Sprite) {
    if (attackType == "melee") {
        slash = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . 1 1 . . . .
            . . . . . . . . . 1 1 . . . . .
            . . . . . . . . 1 1 . . . . . .
            . . . . . . . . 1 . . . . . . .
            . . . . . . . 1 . . . . . . . .
            . . . . . . 1 1 . . . . . . . .
            . . . . . . 1 . . . . . . . . .
            . . . . . 1 . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        slash.setPosition(player2.x, player2.y)
        slash.follow(enemy)
        pause(175)
        sprites.destroy(slash)
    } else {
        projectile.follow(enemies[randint(0,enemies.length)])
        pause(1000)
        sprites.destroy(projectile)
    }
}
let newEnemy = null
function createEnemy(enemyType: Sprite) {
    let newEnemy = enemyType
    newEnemy.setPosition(enemyLocationsX[randint(0, enemyLocationsX.length)], enemyLocationsY[randint(0, enemyLocationsY.length)])
    newEnemy.follow(player2, 10)
    enemies = sprites.allOfKind(SpriteKind.Enemy)
}
info.setLife(3)
let player2: Sprite = null
//These are two lists.
let bolts = [sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . 3 1 1 3 . . . . . .
    . . . . . 2 1 1 1 1 2 . . . . .
    . . . . . 2 1 1 1 1 2 . . . . .
    . . . . . . 3 1 1 3 . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, player2, 50, 50), sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . 2 5 5 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, player2, 50, 50), sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . . 6 8 8 6 . . . . . . 
    . . . . . . 8 9 9 8 . . . . . . 
    . . . . . . 8 9 9 8 . . . . . . 
    . . . . . . 6 8 8 6 . . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, player2, 50, 50)]
let enemyImages = [sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy), sprites.create(img`
        . . f f f . . . . . . . . f f f
        . f f c c . . . . . . f c b b c
        f f c c . . . . . . f c b b c .
        f c f c . . . . . . f b c c c .
        f f f c c . c c . f c b b c c .
        f f c 3 c c 3 c c f b c b b c .
        f f b 3 b c 3 b c f b c c b c .
        . c b b b b b b c b b c c c . .
        . c 1 b b b 1 b b c c c c . . .
        c b b b b b b b b b c c . . . .
        c b c b b b c b b b b f . . . .
        f b 1 f f f 1 b b b b f c . . .
        f b b b b b b b b b b f c c . .
        . f b b b b b b b b c f . . . .
        . . f b b b b b b c f . . . . .
        . . . f f f f f f f . . . . . .
    `,SpriteKind.Enemy)]
let enemyLocationsX = [175,24,0]
let enemyLocationsY = [85,184,0]
let enemy: Sprite = null
for (let i = 0; i<7; i++) {
    enemy = enemyImages[randint(0, enemyImages.length)]
    createEnemy(enemy)
}
let slash: Sprite = null
let enemies: Sprite[] = []
let treasure = sprites.create(img`
    . . b b b b b b b b b b b b . .
    . b e 4 4 4 4 4 4 4 4 4 4 e b .
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e e 4 4 4 4 4 4 4 4 4 4 e e b
    b e e e e e e e e e e e e e e b
    b e e e e e e e e e e e e e e b
    b b b b b b b d d b b b b b b b
    c b b b b b b c c b b b b b b c
    c c c c c c b c c b c c c c c c
    b e e e e e c b b c e e e e e b
    b e e e e e e e e e e e e e e b
    b c e e e e e e e e e e e e c b
    b b b b b b b b b b b b b b b b
    . b b . . . . . . . . . . b b .
`, SpriteKind.Player)
treasure.setPosition(24, 184)
enemies = sprites.allOfKind(SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
player2 = Render.getRenderSpriteInstance()
player2.setPosition(232, 25)
Render.setViewMode(ViewMode.raycastingView)
Render.setAttribute(Render.attribute.dirX, 0)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite: Sprite, otherSprite: Sprite) {
    treasure.setImage(img`
        . b b b b b b b b b b b b b b .
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
        b e e 4 4 4 4 4 4 4 4 4 4 e e b
        b b b b b b b d d b b b b b b b
        . b b b b b b c c b b b b b b .
        b c c c c c b c c b c c c c c b
        b c c c c c c b b c c c c c c b
        b c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c b
        b b b b b b b b b b b b b b b b
        b e e e e e e e e e e e e e e b
        b e e e e e e e e e e e e e e b
        b c e e e e e e e e e e e e c b
        b b b b b b b b b b b b b b b b
        . b b . . . . . . . . . . b b .
    `)
    pause(250)
    game.gameOver(true)
})