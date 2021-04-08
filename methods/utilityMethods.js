
//update ui data
function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

//need to return an interval
function get_game_tick() {
    return 3000;
}

function woodcuttingHandler() {
    move_bar();
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