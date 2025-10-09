import {world} from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event)=> {
    const msg = event.message;
    
    if (msg == "명령어1") {
        event.cancel = true;
        event.sender.runCommand("give @s diamond 1");
    }
    
})
