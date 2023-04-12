// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020001020000020000000000010100010300010100010101010101000101000101000201000101010101010001020001010001020001020101010200010100010100000000000000000000000000000101020101010101020101010100010001010101010100010101010102000100010101010102000201010101010001000101010101010000000000000000020001010101010101010102010101000100010100000002010101010101020001000201020200000000000000000000020001010001010102010101000101010100010100000000000000000002000000000101020101010201010101010101020101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . 2 . . . . . 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 . 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 . 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . . 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight4,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
