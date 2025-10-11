console.warn("script started");

import { world, system } from "@minecraft/server";

world.afterEvents.blockExplode.subscribe((ev)=>{
    const block = ev.block;
    const player = ev.source;

    if(block.typeId == "minecraft:diamond_block"){
        player.runCommand(`give @s diamond 10`);
    }});
