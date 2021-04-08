var fishData = {
    fishLoop: null,
    fishXp: 0,
    fish: ["shrimp, trout, swordfish, monkfish"]
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function get_fishing_xp(fish_type) {
    // determine a weight for tree_weight
    var fish_xp = null;
    switch (fish_type) {
        case 'shrimp':
            fish_xp = 10;
            break;
        case 'trout':
            fish_xp = 50;
            break;
        case 'swordfish':
            fish_xp = 100;
            break;
        case 'monkfish':
            fish_xp = 120;
            break;
        default:
            console.log('invalid fish type - get_fishing_xp()');
            fish_xp = 0;
            break;
    }
    return fish_xp;
}

function catchFish() {
    if (fishData.fishLoop) {
        clearInterval(fishData.fishLoop);
        fishData.fishLoop = null;
    } else {
        fishData.fishLoop = setInterval(() => {
            var xp_gained = get_fishing_xp('shrimp');
            fishData.fishXp = fishData.fishXp + xp_gained;
            update_total_xp(xp_gained);
            fishBar.style.width = fishData.fishXp + '%';
            fishBar.innerHTML = fishData.fishXp + '%';
            update("fishXp", `${fishData.fishXp} Fishing Experience`, +fishBar);
        }, get_game_tick());
    }
}

