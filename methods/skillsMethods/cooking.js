var cookingData = {
    cookingLoop: null,
    cookingXp: 0,
    fish: ["shrimp, trout, swordfish, monkfish"]
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function get_cooking_xp(fish_type) {
    // determine a weight for tree_weight
    var cooking_xp = null;
    switch (fish_type) {
        case 'shrimp':
            cooking_xp = 10;
            break;
        case 'trout':
            cooking_xp = 50;
            break;
        case 'swordfish':
            cooking_xp = 100;
            break;
        case 'monkfish':
            cooking_xp = 120;
            break;
        default:
            console.log('invalid fish type - get_cooking_xp()');
            cooking_xp = 0;
            break;
    }
    return cooking_xp;
}

function cookFish() {
    if (cookingData.cookingLoop) {
        clearInterval(cookingData.cookingLoop);
        cookingData.cookingLoop = null;
    } else {
        cookingData.cookingLoop = setInterval(() => {
            var xp_gained = get_cooking_xp('shrimp');
            cookingData.cookingXp = cookingData.cookingXp + xp_gained;
            update_total_xp(xp_gained);
            cookingBar.style.width = cookingData.cookingXp + '%';
            cookingBar.innerHTML = cookingData.cookingXp + '%';
            update("cookingXp", `${cookingData.cookingXp} Cooking Experience`, +cookingBar);
        }, get_game_tick());
    }
}

