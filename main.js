console.warn("started");

import { world } from "@minecraft/server";

// 블록을 부술 때마다 메시지 출력
world.afterEvents.playerBreakBlock.subscribe((event) => {
    const player = event.player;
    player.sendMessage("블록을 부쉈습니다!");
});

// 막대기 사용 시 넉백 효과
world.afterEvents.beforeItemUse.subscribe((event) => {
    const { itemStack, source } = event;
    // 플레이어가 막대기를 사용할 때만
    if (itemStack.typeId === "minecraft:stick" && source.typeId === "minecraft:player") {
        // 넉백 효과: 플레이어를 바라보는 방향의 반대로 밀어냄
        const velocity = source.getViewDirection();
        // 넉백 세기 조절 (여기서는 2배)
        const knockbackStrength = 2;
        source.applyKnockback(
            -velocity.x * knockbackStrength,
            -velocity.z * knockbackStrength,
            0.5 // 위로도 살짝 튕기게
        );
        source.sendMessage("넉백!");
    }
});

