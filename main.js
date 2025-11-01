import {world} from "@minecraft/server";

world.afterEvents.playerBreakBlock.subscribe((event)=>{
    const block = event.brokenBlockPermutation;
    const player= event.player;
    player.runCommand(`summon lightning_bolt ${player.location.x} ${player.location.y} ${player.location.z}`)});


world.afterEvents.entityHurt.subscribe((event)=>{
    const entity = event.hurtEntity;
    const damager = event.damageSource.damagingEntity;
    if(damager?.typeId === "minecraft:player"){
        damager.applyDamage(5);
    } 
})

world.afterEvents.playerPlaceBlock.subscribe((event)=>{
    const block = event.block;
    const player= event.player;
    player.onScreenDisplay.setActionBar(`You placed a ${block.typeId}`);
})
