console.warn("started");

import { world } from '@minecraft/server';

// 스크립트 진입점
world.afterEvents.worldInitialize.subscribe(() => {
    world.sendMessage("스크립트: '블록 파괴 시 번개' 활성화!");
});

// 1. 'beforeEvents.playerBreakBlock' 이벤트 구독
// 이 이벤트는 플레이어가 블록을 파괴하기 직전에 발생합니다.
world.beforeEvents.playerBreakBlock.subscribe((event) => {
    
    // 이벤트 객체에서 필요한 정보 추출
    const player = event.player;
    const block = event.block;

    // 블록이 파괴될 위치 (좌표) 가져오기
    const location = block.location;
    
    // 블록이 위치한 차원(Dimension) 가져오기
    const dimension = block.dimension;

    // 2. 해당 위치에 번개 엔티티(minecraft:lightning_bolt) 소환
    try {
        // 번개 소환 (번개는 월드에 소환해야 합니다)
        dimension.spawnEntity('minecraft:lightning_bolt', location);
        
        // 플레이어에게 알림 (선택 사항)
        player.sendMessage(`§e${block.typeId}§f 블록 파괴! 번개가 소환되었습니다. ⚡`);

    } catch (error) {
        // 소환에 실패했을 경우 오류 처리 (예: 차원 오류 등)
        console.warn("번개 소환 중 오류 발생: " + error);
    }
    
    // 참고: before 이벤트이므로, event.cancel = true; 를 사용하면 블록 파괴 자체를 막을 수 있습니다.
    // 여기서는 파괴는 그대로 진행시키고 번개만 추가합니다.
});
