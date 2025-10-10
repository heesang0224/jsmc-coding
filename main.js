console.warn("script started");

import { world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe((event)=>{
    const item = event.itemStack;
    const player = event.source;

    if(item.typeId == "minecraft:stick"){
        player.applyKnockback(2, player.location.x, player.location.z);
        console.warn(`${player.name} 넉백됨`);
    }
})
