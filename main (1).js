console.warn("started")

import { world, WorldBeforeEvents } from "@minecraft/server"

world.sendMessage("hello")
world.afterEvents.blockExplode.subscribe((event)=>
{
    console.warn("block exploded")
    world.sendMessage("block exploded")
});