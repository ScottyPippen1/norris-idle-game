var fishLoop;
var fishXp = 0;
var totalXp = 0;
var fish = ["shrimp, trout, swordfish, monkfish"];

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function update_total_xp(xp_gained) {
    totalXp = totalXp + xp_gained;
    update("totalXp", `Total Experience: ${totalXp} `);
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
    //const fishBar = document.getElementById('fishBar');
    if (fishLoop) {
        clearInterval(fishLoop);
        fishLoop = null;
    } else {
        fishLoop = setInterval(() => {
            var xp_gained = get_fishing_xp('shrimp');
            fishXp = fishXp + xp_gained;
            update_total_xp(xp_gained);
            fishBar.style.width = fishXp + '%';
            fishBar.innerHTML = fishXp + '%';
            update("fishXp", `${fishXp} Fishing Experience`, +fishBar);
        }, get_game_tick());
    }
}

