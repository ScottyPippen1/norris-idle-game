//need to return an interval

function active_skill() {
    player = playerData.activeSkill;
    update("activeSkill", `Active skill: ${player}`);
    console.log(player);
    return player;
}

function get_interval_speed(tree_id) {

    playerData.actionIntervalSpeed = woodcuttingTreeData.trees[tree_id].intervalSpeed;
    console.log("interval speed: " + playerData.actionIntervalSpeed);
    return playerData.actionIntervalSpeed;
}

function get_selected_tree(tree_id) {
    selectedTree = tree_id;
    console.log(selectedTree);
    return selectedTree;
}

function execute_woodcutting(button_clicked) {
    let stopCutting = button_clicked == 0 && task != null;
    //stops task if button clicked while active
    if (stopCutting) {
        //clears active task
        clearTimeout(task);
        //clears active skill
        //player = null;
        task = null;
        return;
    }
    task = setTimeout(woodcuttingHandler, get_interval_speed(selectedTree));
}

function woodcuttingHandler() {
    cutWood();
}

function firemakingHandler() {
    lightLog();
}

function fishingHandler() {
    catchFish();
}

function cookingHandler() {
    cookFish();
}

function miningHandler() {
    mineVein();
}

function smithingHandler() {
    smeltBar();
}