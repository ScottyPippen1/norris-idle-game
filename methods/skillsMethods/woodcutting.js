// wc data object
// var gameData = {
//     wcXp: 0,
//     wcLvl: 0,
//     selectedTree: []
// }

//calculate progress bar % to next level
function wcPercentToNextLvl() {
    nextWcLvl = skillLevelMilestones[wcLvl];
    percentToNextWcLvl = (wcXp - skillLevelMilestones[wcLvl - 1]) / (nextWcLvl - skillLevelMilestones[wcLvl - 1]) * 100;
}

function level_up_woodcutting() {
    if (wcXp >= skillLevelMilestones[wcLvl]) {
        wcLvl += 1;
        console.log("New woodcutting level: " + wcLvl);
    }
}

function get_interval_speed(tree_id) {
    // sets interval speed for based on type of tree
    actionIntervalSpeed = woodcuttingTreeData.trees[tree_id].intervalSpeed;
    console.log("interval speed: " + actionIntervalSpeed);
    return actionIntervalSpeed;
}

function get_selected_tree(tree_id) {
    // sets selected tree to cut
    selectedTree = tree_id;
    console.log(selectedTree);
    return selectedTree;
}

function execute_woodcutting(button_clicked) {
    // sets active skill
    activeSkill = skillsData.skills[0].name;

    level_up_woodcutting();
    update("wcLvl", `Woodcutting Level: ${wcLvl}`);

    // checks if a tree is selected to cut
    if (selectedTree == null) {
        alert("Select a tree to cut");
        return;
    }

    // stops task if button clicked while task is active
    let stopCutting = button_clicked == 0 && task != null;
    if (stopCutting) {
        // clears active task
        clearTimeout(task);

        // clears active skill
        activeSkill = "";

        active_skill();
        task = null;
        console.log("Stopped Woodcutting");
        return;
    }
    active_skill();
    // task to cut wood if no task is running
    task = setTimeout(woodcuttingHandler, get_interval_speed(selectedTree));
}

function cutWood() {
    // determines how much xp is incremented per action based on type of tree selected
    let xp_gained = woodcuttingTreeData.trees[selectedTree].xp;

    wcXp = wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: <br>${wcXp}`);
    execute_woodcutting(1);
}



