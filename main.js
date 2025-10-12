// Bedrock UI Example for @minecraft/server 2.3.0-beta & @minecraft/server-ui 2.0.0
// 파일: behavior-pack/scripts/ui-example.js

import { world, system } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

console.warn("시작됨");

// 메인 UI 열기 함수
function openMainUI(player) {
  const form = new ActionFormData()
    .title("UI 예제 (2.3.0-beta)")
    .body("원하는 메뉴를 선택하세요.")
    .button("인사 메시지")
    .button("설정 폼 열기")
    .button("닫기");

  form.show(player).then(response => {
    if (response?.canceled) return;
    switch (response.selection) {
      case 0:
        player.sendMessage("안녕하세요! UI 테스트입니다.");
        break;
      case 1:
        openSettingsForm(player);
        break;
      case 2:
        player.sendMessage("UI를 닫았습니다.");
        break;
    }
  });
}

// 설정 폼 (ModalFormData 예제)
function openSettingsForm(player) {
  const modal = new ModalFormData()
    .title("설정 메뉴")
    .textField("닉네임 표시", "메시지 입력...", player.name)
    .toggle("알림 받기", true);

  modal.show(player).then(result => {
    if (result?.canceled) return;
    const nickname = result.formValues[0];
    const notifications = result.formValues[1];
    player.sendMessage(`닉네임: ${nickname}, 알림: ${notifications}`);
  });
}

// 채팅 명령으로 UI 호출 (/ui)
// 아이템 사용 시 UI 열기 (bridge:effect)
world.afterEvents.itemUse.subscribe(ev => {
  const player = ev.source;
  const item = ev.item;
  if (item?.typeId === "bridge:effect") {
    system.run(() => openMainUI(player));
  }
});("§a/ui 를 입력하여 UI를 열어보세요!");

