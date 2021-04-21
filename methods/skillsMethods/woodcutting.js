// wc data object
var wcData = {
    wcXp: 0,
    selectedTree: []
}

function get_interval_speed(tree_id) {
    // sets interval speed for based on type of tree
    playerData.actionIntervalSpeed = woodcuttingTreeData.trees[tree_id].intervalSpeed;
    console.log("interval speed: " + playerData.actionIntervalSpeed);
    return playerData.actionIntervalSpeed;
}

function get_selected_tree(tree_id) {
    // sets selected tree to cut
    selectedTree = tree_id;
    console.log(selectedTree);
    return selectedTree;
}

function execute_woodcutting(button_clicked) {
    // sets active skill
    playerData.activeSkill = skillsData.skills[0].name;

    // checks if a tree is selected to cut
    if (selectedTree == null) {
        alert("Select a tree to cut");
        return;
    }

    // stops task if button clicked while active
    let stopCutting = button_clicked == 0 && task != null;
    if (stopCutting) {
        // clears active task
        clearTimeout(task);

        // clears active skill
        playerData.activeSkill = "";

        active_skill();
        task = null;
        return;
    }
    active_skill();
    // task to cut wood if no task is running
    task = setTimeout(woodcuttingHandler, get_interval_speed(selectedTree));
}

function cutWood() {
    // determines how much xp is incremented per action based on type of tree selected
    let xp_gained = woodcuttingTreeData.trees[selectedTree].xp;

    wcData.wcXp = wcData.wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
    execute_woodcutting(1);
}



