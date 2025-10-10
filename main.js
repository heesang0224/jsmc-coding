console.warn("script started");

import { world } from "@minecraft/server";

world.afterEvents.itemStartUse.subscribe((event) => {
    const item = event.itemStack;
    const player = event.source;
    if (item.typeId == "minecraft:iron_axe") {
        player.runCommand('summon tnt ~ ~ ~ {"Fuse":0}');
    }

    if (item.typeId == "minecraft:stick"){
        player.spawnParticle("minecraft:flame", player.location, 20);
    }
});
