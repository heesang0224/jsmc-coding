console.warn("stared");

import { world } from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event)=>{
    const message = event.message;
    const player = event.sender;

    if(message == "uhc start"){
        player.runCommand("give @a stone_sword 1");
        player.runCommand("enchant @a sharpness 2");
        player.runCommand("give @a stone_pickaxe 1");
        player.runCommand("enchant @a efficiency 5");
        player.runCommand("give @a stone_axe 1");
        player.runCommand("enchant @a efficiency 5");
        player.runCommand("give @a stone_shovel 1");
        player.runCommand("enchant @a efficiency 5");
        
    }
})
