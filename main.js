console.warn("stared");

import { world } from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event)=>{
    const message = event.message;
    const player = event.sender;

    if(message == "uhc start"){
        player.sendMessage("UHC started!");
        player.runCommand("give @s diamond_sword[{Unbreakable:1b}] 1");
    }
})
