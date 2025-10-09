import {world} from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event)=> {
    const msg = event.message;
    
    if (msg == "보호") {
        event.cancel = true;
        event.sender.runCommand("enchant @s protection 4");
    }
    
    if (msg == "날카로움") {
        event.cancel = true;
        event.sender.runCommand("enchant @s sharpness 5");
    }

    if (msg == "견고") {
        event.cancel = true;
        event.sender.runCommand("enchant @s unbreaking 3");
    }

    if (msg == "수선") {
        event.cancel = true;
        event.sender.runCommand("enchant @s mending 1");
    }

    if (msg == "밀치기") {
        event.cancel = true;
        event.sender.runCommand("enchant @s knockback 2");
    }

    if (msg == "발화") {
        event.cancel = true;
        event.sender.runCommand("enchant @s fire_aspect 2");
    }

    if (msg == "화염") {
        event.cancel = true;
        event.sender.runCommand("enchant @s flame 1");
    }

    if (msg == "힘") {
        event.cancel = true;
        event.sender.runCommand("enchant @s power 5");
    }

    if (msg == "가벼운착지") {
        event.cancel = true;
        event.sender.runCommand("enchant @s feather_falling 4");
    }
})
