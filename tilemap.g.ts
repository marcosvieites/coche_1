// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007080808080808080808080808080805060b0a0a0a0a0a0a0a0a0a0a0a0a0e04060a09090909090f090909090f090904060a0f0f0f0f090f09090f0f0f090a04060a09090f09090f090909090f090a04060a09090f09090f090909090f090a04060a090f0f09090f0909090909090a04060a090f0f0f090f0f0f0f0f09090a04060a090f090909090909090909090a04060a090f0f0f0909090f0f0f0f0f0a04060a090909090909090f090909090a04060a090f09090909090f090909090a04060a090f0f0f09090909090909090a040609090f090909090909090909090a04060c0a0a0a0a0a0a0a0a0a0a0a0a0d0401020202020202020202020202020203`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.builtin.brick,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles7,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
