// wc data object
// var gameData = {
//     wcXp: 0,
//     wcLvl: 0,
//     selectedTree: []
// }

function level_up_woodcutting() {
    if (gameData.wcXp >= skillLevelMilestones[gameData.wcLvl]) {
        gameData.wcLvl += 1;
        console.log("New woodcutting level: " + gameData.wcLvl);
    }
}

function get_interval_speed(tree_id) {
    // sets interval speed for based on type of tree
    gameData.actionIntervalSpeed = woodcuttingTreeData.trees[tree_id].intervalSpeed;
    console.log("interval speed: " + gameData.actionIntervalSpeed);
    return gameData.actionIntervalSpeed;
}

function get_selected_tree(tree_id) {
    // sets selected tree to cut
    selectedTree = tree_id;
    console.log(selectedTree);
    return selectedTree;
}

function execute_woodcutting(button_clicked) {
    // sets active skill
    gameData.activeSkill = skillsData.skills[0].name;

    level_up_woodcutting();
    update("wcLvl", `Woodcutting Level: ${gameData.wcLvl}`);



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
        gameData.activeSkill = "";

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

    gameData.wcXp = gameData.wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: ${gameData.wcXp}`);
    execute_woodcutting(1);
}



