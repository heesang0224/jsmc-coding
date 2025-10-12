import { world, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

function openTestUI(player) {
  const form = new ActionFormData()
    .title("테스트 UI")
    .body("버튼을 선택하세요.")
    .button("버튼 A")
    .button("버튼 B")
    .button("닫기");

  form.show(player).then(response => {
    if (response?.canceled) return;
    switch(response.selection) {
      case 0: player.sendMessage("버튼 A 클릭!"); break;
      case 1: player.sendMessage("버튼 B 클릭!"); break;
      case 2: player.sendMessage("UI 종료"); break;
    }
  });
}

// 채팅 명령어 /ui
world.beforeEvents.chatSend.subscribe(ev => {
  if (ev.message.trim() === "/ui") {
    ev.cancel = true;
    system.run(() => openTestUI(ev.sender));
  }
});

// 플레이어 접속 안내
world.afterEvents.playerJoin.subscribe(ev => {
  ev.player.sendMessage("§a/ui 를 입력하면 테스트 UI가 열립니다.");
});
