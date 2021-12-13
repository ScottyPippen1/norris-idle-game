function active_skill() {
    // updates active skill
    if (!gameData.activeSkill) {
        update("activeSkill", ``);
        return;
    }
    update("activeSkill", `Active skill: ${gameData.activeSkill}`);
    console.log(gameData.activeSkill);
}

//updates html elements
function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

// updates total xp
function update_total_xp(xp_gained) {
    gameData.totalXp = gameData.totalXp + xp_gained;
    update("totalXp", `Total Experience: ${gameData.totalXp} `);
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