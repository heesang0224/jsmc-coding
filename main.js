console.warn("script started");

import { world } from "@minecraft/server";


world.afterEvents.chatSend.subscribe((ev)=>{
    const msg = ev.message;

    if(msg == "kill count"){
        ev.sender.runCommand("say 카운트 시작")
        ev.sender.runCommand("scoreboard objectives add kill dummy kill")
        ev.sender.runCommand("scoreboard objectives setdisplay sidebar kill")
        ev.sender.runCommand("scoreboard players add @a kill 0")
    }
    if(msg == "reset"){
        ev.sender.runCommand("say 카운트 초기화")
        ev.sender.runCommand("scoreboard players set @a kill 0")
    }
})


world.afterEvents.entityDie.subscribe((ev)=>{
    const kill = ev.damageSource.damagingEntity
    const die =ev.deadEntity
    if(kill.typeId == "minecraft:player"){
        if(die.typeId == "minecraft:player"){

            world.sendMessage(`${kill.name}님이 ${die.name}님을 처치하였습니다!`)
            kill.runCommand(`scoreboard players add @s kill 1`)
        }
    }

});
