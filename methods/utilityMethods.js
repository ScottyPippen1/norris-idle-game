//need to return an interval

function active_skill() {
    player = playerData.activeSkill;
    update("activeSkill", `Active skill: ${player}`);
    console.log(player);
}

function get_interval_speed(skill_id) {
    playerData.actionIntervalSpeed = skillsData.skills[skill_id].baseIntervalSpeed;
    console.log(playerData.actionIntervalSpeed);
    return playerData.actionIntervalSpeed;

}

function execute_woodcutting(button_clicked) {
    let stopCutting = button_clicked == 0 && task != null;
    //stops task if button clicked while active
    if (stopCutting) {
        //clears active task
        clearTimeout(task);
        //clears active skill
        playerData.activeSkill = "";
        task = null;
        return;
    }
    task = setTimeout(woodcuttingHandler, get_interval_speed(0));
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