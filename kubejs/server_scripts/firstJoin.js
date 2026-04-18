const stopSpawningInSpace = (player, level) => {
    if (player.block.down.id == '#minecraft:leaves') {
        var yLimit = 64;
        var currentY = player.block.down.y;
        let foundGround = false;
        while (currentY >= yLimit) {
            let block = level.getBlock(player.block.down.x, currentY - 4, player.block.down.z);
            if (block.id !== 'minecraft:air') {
                foundGround = true;
                break;
            }
            currentY--;
        }
        if (foundGround) {
            player.teleport(player.block.down.x + 0.5, currentY + 1, player.block.down.z + 0.5);
        }
    }
}

PlayerEvents.loggedIn(evt => {
    if (!evt.player.stages.has('first_join')) {
        evt.player.stages.add('first_join');

        // evt.server.schedule('40t', () => stopSpawningInSpace(evt.player, evt.level));
    }
});
