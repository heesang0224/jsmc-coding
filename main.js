console.warn("script started");

import { world } from "@minecraft/server";

world.afterEvents.playerBreakBlock.subscribe((ev) => {
    const block = ev.block;
    const player = ev.player;

    // 다이아몬드 광석을 부쉈는지 확인
    if (block.typeId === "minecraft:diamond_ore") {
        // 플레이어에게 막대기 1개 지급
        player.runCommandAsync('give @s stick 1');
    }
});
