window.onload = function () {
    loadGame();
    updateLoadedGameUI();
}

function loadGame() {
    //load saved game
    let savedGame = JSON.parse(localStorage.getItem('gameSave'));
    if (typeof savedGame.lastTick !== "undefined") lastTick = savedGame.lastTick;
    if (typeof savedGame.totalXp !== "undefined") totalXp = savedGame.totalXp;
    // if (typeof savedGame.skills !== "undefined") skills = savedGame.skills;
    if (typeof savedGame.activeSkill !== "undefined") activeSkill = savedGame.activeSkill;
    if (typeof savedGame.actionIntervalSpeed !== "undefined") actionIntervalSpeed = savedGame.actionIntervalSpeed;
    if (typeof savedGame.wcXp !== "undefined") wcXp = savedGame.wcXp;
    if (typeof savedGame.wcLvl !== "undefined") wcLvl = savedGame.wcLvl;
    if (typeof savedGame.selectedTree !== "undefined") selectedTree = savedGame.selectedTree;
    if (typeof savedGame.miningXp !== "undefined") miningXp = savedGame.miningXp;
    if (typeof savedGame.miningLvl !== "undefined") miningLvl = savedGame.miningLvl;
    if (typeof savedGame.selectedVein !== "undefined") selectedVein = savedGame.selectedVein;
    if (typeof savedGame.fishXp !== "undefined") fishXp = savedGame.fishXp;
    if (typeof savedGame.fishLvl !== "undefined") fishLvl = savedGame.fishLvl;
    if (typeof savedGame.selectedFishSpot !== "undefined") selectedFishSpot = savedGame.selectedFishSpot;
    if (typeof savedGame.test !== "undefined") test = savedGame.test;
    if (typeof savedGame.test2 !== "undefined") test2 = savedGame.test2;

    console.log(savedGame);
}

function saveGame() {
    let gameSave = {
        lastTick: lastTick,
        totalXp: totalXp,
        // skills: skills,
        activeSkill: activeSkill,
        actionIntervalSpeed: actionIntervalSpeed,
        wcXp: wcXp,
        wcLvl: wcLvl,
        selectedTree: selectedTree,
        miningXp: miningXp,
        miningLvl: miningLvl,
        selectedVein: selectedVein,
        fishXp: fishXp,
        fishLvl: fishLvl,
        selectedFishSpot: selectedFishSpot,
        test: test,
        test2: test2
    };
    localStorage.setItem('gameSave', JSON.stringify(gameSave));
}

function active_skill() {
    // updates active skill
    if (!activeSkill) {
        update("activeSkill", ``);
        return;
    }
    update("activeSkill", `Active skill: ${activeSkill}`);
    console.log(activeSkill);
}

//update loaded game html elements
function updateLoadedGameUI() {
    update("totalXp", `Total Experience: ${totalXp}`);
    update("wcLvl", `Woodcutting Level: ${wcLvl}`);
    update("wcXp", `Woodcutting Experience: <br>${wcXp}`);
    update("miningLvl", `Mining Level: ${miningLvl}`);
    update("miningXp", `Mining Experience: <br>${miningXp}`);
    update("fishLvl", `Fishing Level: ${fishLvl}`);
    update("fishXp", `Fishing Experience: <br>${fishXp}`);
}

//updates html elements
function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

// updates total xp
function update_total_xp(xp_gained) {
    totalXp = totalXp + xp_gained;
    update("totalXp", `Total Experience: ${totalXp}`);
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