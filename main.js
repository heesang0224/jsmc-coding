console.warn("this code started");

import{world} from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((eventData)=>{
    if(message === "날씨"){
        eventData.cancel = true;
        eventData.sender.runCommandAsync("weather clear");
    }});
