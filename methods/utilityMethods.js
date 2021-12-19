function active_skill() {
    // updates active skill
    if (!gameData.activeSkill) {
        update("activeSkill", ``);
        return;
    }
    update("activeSkill", `Active skill: ${gameData.activeSkill}`);
    console.log(gameData.activeSkill);
}

//update loaded game html elements
function updateLoadedGameUI() {
    update("totalXp", `Total Experience: ${gameData.totalXp} `);
    update("wcLvl", `Woodcutting Level: ${gameData.wcLvl}`);
    update("wcXp", `Woodcutting Experience: <br>${gameData.wcXp}`);
    update("miningLvl", `Mining Level: ${gameData.miningLvl}`);
    update("miningXp", `Mining Experience: <br>${gameData.miningXp}`);
    update("fishLvl", `Fishing Level: ${gameData.fishLvl}`);
    update("fishXp", `Fishing Experience: <br>${gameData.fishXp}`);
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