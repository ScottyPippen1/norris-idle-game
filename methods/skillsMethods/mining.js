// mining data object
// var gameData = {
//     miningXp: 0,
//     miningLvl: 0,
//     selectedVein: []
// }

//calculate progress bar % to next level
function miningPercentToNextLvl() {
    nextMiningLvl = skillLevelMilestones[gameData.miningLvl];
    percentToNextMiningLvl = (gameData.miningXp - skillLevelMilestones[gameData.miningLvl - 1]) / (nextMiningLvl - skillLevelMilestones[gameData.miningLvl - 1]) * 100;
}

function level_up_mining() {
    if (gameData.miningXp >= skillLevelMilestones[gameData.miningLvl]) {
        gameData.miningLvl += 1;
        console.log("New mining level: " + gameData.miningLvl);
    }
}

function get_interval_speed(vein_id) {
    // sets interval speed for based on type of vein
    gameData.actionIntervalSpeed = miningVeinData.veins[vein_id].intervalSpeed;
    console.log("interval speed: " + gameData.actionIntervalSpeed);
    return gameData.actionIntervalSpeed;
}

function get_selected_vein(vein_id) {
    // sets selected vein to mine
    selectedVein = vein_id;
    console.log(selectedVein);
    return selectedVein;
}

function execute_mining(button_clicked) {
    // sets active skill
    gameData.activeSkill = skillsData.skills[2].name;

    level_up_mining();
    update("miningLvl", `Mining Level: ${gameData.miningLvl}`);

    // checks if a tree is selected to cut
    if (selectedVein == null) {
        alert("Select a vein to mine");
        return;
    }

    // stops task if button clicked while active
    let stopMining = button_clicked == 0 && task != null;
    if (stopMining) {
        // clears active task
        clearTimeout(task);

        // clears active skill
        gameData.activeSkill = "";

        active_skill();
        task = null;
        console.log("Stopped Mining");
        return;
    }
    active_skill();
    // task to mine vein if no task is running
    task = setTimeout(miningHandler, get_interval_speed(selectedVein));
}

function mineVein() {
    // determines how much xp is incremented per action based on type of vein selected
    let xp_gained = miningVeinData.veins[selectedVein].xp;

    gameData.miningXp = gameData.miningXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("miningXp", `Mining Experience: ${gameData.miningXp}`);
    execute_mining(1);
}


