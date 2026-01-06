console.warn("hello world");

import { world, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";


world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
    const { player, block } = event;

    if (block.typeId === "minecraft:enchanting_table") {
        event.cancel = true;

        system.run(() => {
            const form = new ActionFormData()
                .title("마법 부여 메뉴")
                .body("옵션을 선택해주세요")
                .button("랜덤 인챈트", "textures/items/book_enchanted")
                .button("닫기", "textures/ui/exit");

            form.show(player).then((response) => {
                if (response.canceled) return;

                if (response.selection === 0) {
                    const enchants = ["sharpness", "knockback", "unbreaking", "fire_aspect"];
                    const randomEnchant = enchants[Math.floor(Math.random() * enchants.length)];
                    const level = Math.floor(Math.random() * 5) + 1;

                    player.runCommand(`enchant @s ${randomEnchant} ${level}`);
                    player.sendMessage(`랜덤 인챈트 부여: ${randomEnchant} ${level}`);
                }
                if (response.selection === 1) {
                    player.sendMessage("메뉴를 닫았습니다.");
                }
            });
        });
    }
});

