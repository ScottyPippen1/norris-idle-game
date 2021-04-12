//need to return an interval

function active_skill() {
    player = playerData.activeSkill;
    update("activeSkill", `Active skill: ${player}`);
    console.log(player);
}

function get_interval_speed() {
    intervalSpeed = playerData.actionIntervalSpeed;
    console.log(intervalSpeed);
    return intervalSpeed;

}

function execute_woodcutting() {
    if (playerData.activeSkill == skillsData.skills[0] || playerData.activeSkill != null) {
        clearTimeout(woodcuttingHandler());
        return;
    }
    playerData.activeSkill = skillsData.skills[0].name;
    playerData.actionIntervalSpeed = skillsData.skills[0].baseIntervalSpeed;
    active_skill();
    get_woodcutting_xp(tree);
    get_interval_speed();
    // start_task
    setTimeout(woodcuttingHandler, get_interval_speed());

}

function woodcuttingHandler() {
    // move_bar();
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