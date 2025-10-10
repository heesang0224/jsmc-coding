console.warn("script started");

import { world } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.player;
    const block = event.block;
    player.runCommand(`say You placed a ${block.typeId}`);
});
