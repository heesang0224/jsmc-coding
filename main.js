console.warn("stared");

import { world } from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event)=>{
    const message = event.message;
    const player = event.sender;

    if(message == "uhc start"){
        player.sendMessage("UHC started!");
        player.runCommand("give @a stone_sword 1");
        player.runCommand("enchant @a sharpness 2");
    }
})
