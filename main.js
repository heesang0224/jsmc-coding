console.warn("starting");

import {world} from "@minecraft/server";

world.afterEvents.playerEmote.subscribe((event)=>{
    const player = event.player;
    const emote = event.personaPieceId;
    console.warn(`${player.name} just did the emote: ${emote}`);
})
