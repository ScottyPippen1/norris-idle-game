function active_skill() {
    // updates active skill
    player = playerData.activeSkill;
    if (!player) {
        update("activeSkill", ``);
        return;
    }
    update("activeSkill", `Active skill: ${player}`);
    console.log(player);
}

function woodcuttingHandler() {
    cutWood();
}

// function firemakingHandler() {
//     lightLog();
// }

function fishingHandler() {
    catchFish();
}

// function cookingHandler() {
//     cookFish();
// }

function miningHandler() {
    mineVein();
}

// function smithingHandler() {
//     smeltBar();
// }