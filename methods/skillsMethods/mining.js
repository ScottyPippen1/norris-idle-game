// mining data object
var miningData = {
    miningXp: 0,
    miningLvl: 0,
    selectedVein: []
}

function level_up_mining() {
    if (miningData.miningXp >= skillLevelMilestones[miningData.miningLvl]) {
        miningData.miningLvl += 1;
        console.log("New mining level: " + miningData.miningLvl);
    }
}

function get_interval_speed(vein_id) {
    // sets interval speed for based on type of vein
    playerData.actionIntervalSpeed = miningVeinData.veins[vein_id].intervalSpeed;
    console.log("interval speed: " + playerData.actionIntervalSpeed);
    return playerData.actionIntervalSpeed;
}

function get_selected_vein(vein_id) {
    // sets selected vein to mine
    selectedVein = vein_id;
    console.log(selectedVein);
    return selectedVein;
}

function execute_mining(button_clicked) {
    // sets active skill
    playerData.activeSkill = skillsData.skills[2].name;

    level_up_mining();
    update("miningLvl", `Mining Level: ${miningData.miningLvl}`);

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
        playerData.activeSkill = "";

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

    miningData.miningXp = miningData.miningXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("miningXp", `Mining Experience: ${miningData.miningXp}`);
    execute_mining(1);
}


