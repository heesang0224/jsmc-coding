console.warn("started");

import { world, system } from "@minecraft/server";

// 플레이어가 블록을 부술 때마다 채팅에 메시지 출력
world.afterEvents.playerBreakBlock.subscribe((event) => {
	const player = event.player;
	player.sendMessage("블록을 부쉈습니다!");
});

