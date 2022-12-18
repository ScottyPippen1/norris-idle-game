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
    if (typeof savedGame.selectedTreeId !== "undefined") selectedTreeId = savedGame.selectedTreeId;
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
        selectedTreeId: selectedTreeId,
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
    update("dropdownMenu2", selectedTree);
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

// function fishingHandler() {
//     catchFish();
// }

// function miningHandler() {
//     mineVein();
// }
