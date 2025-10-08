console.warn("started");

import { world, WorldBeforeEvents } from "@minecraft/server";

world.afterEvents.blockExplode.subscribe(function(data){
    world.sendMessage("a player broke a block");
    
})

