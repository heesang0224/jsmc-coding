console.warn("started");

import { world, system } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe((event) => {
    const entity = event.entity;
    
    if (entity.id === "minecraft:player") {
        entity.sendMessage("플레이어가 엔티티를 공격했습니다!");
    }
});
