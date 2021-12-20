// mining data object
// var gameData = {
//     miningXp: 0,
//     miningLvl: 0,
//     selectedVein: []
// }

//calculate progress bar % to next level
function miningPercentToNextLvl() {
    nextMiningLvl = skillLevelMilestones[miningLvl];
    percentToNextMiningLvl = (miningXp - skillLevelMilestones[miningLvl - 1]) / (nextMiningLvl - skillLevelMilestones[miningLvl - 1]) * 100;
}

function level_up_mining() {
    if (miningXp >= skillLevelMilestones[miningLvl]) {
        miningLvl += 1;
        console.log("New mining level: " + miningLvl);
    }
}

function get_interval_speed(vein_id) {
    // sets interval speed for based on type of vein
    actionIntervalSpeed = miningVeinData.veins[vein_id].intervalSpeed;
    console.log("interval speed: " + actionIntervalSpeed);
    return actionIntervalSpeed;
}

function get_selected_vein(vein_id) {
    // sets selected vein to mine
    selectedVein = vein_id;
    console.log(selectedVein);
    return selectedVein;
}

function execute_mining(button_clicked) {
    // sets active skill
    activeSkill = skillsData.skills[2].name;

    level_up_mining();
    update("miningLvl", `Mining Level: ${miningLvl}`);

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
        activeSkill = "";

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

    miningXp = miningXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("miningXp", `Mining Experience: <br>${miningXp}`);
    execute_mining(1);
}


