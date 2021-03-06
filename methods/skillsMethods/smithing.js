var smithingData = {
    smithingLoop: null,
    smithingXp: 0,
    bars: ["bronze, iron, steel, mithril, adamant, runite"]
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function get_smithing_xp(bar) {
    // determine a weight for tree_weight
    var bar_xp = null;
    switch (bar) {
        case 'bronze':
            bar_xp = 25;
            break;
        case 'iron':
            bar_xp = 50;
            break;
        case 'coal':
            bar_xp = 65;
            break;
        case 'mithril':
            bar_xp = 80;
            break;
        case 'adamant':
            bar_xp = 95;
            break;
        case 'rune':
            bar_xp = 115;
            break;
        default:
            console.log('invalid bar type - get_smithing_xp()');
            bar_xp = 0;
            break;
    }

    return bar_xp
}

function smeltBar() {
    if (smithingData.smithingLoop) {
        clearInterval(smithingData.smithingLoop);
        smithingData.smithingLoop = null;
    } else {
        smithingData.smithingLoop = setInterval(() => {
            var xp_gained = get_smithing_xp('bronze');
            smithingData.smithingXp = smithingData.smithingXp + xp_gained;
            // visual updates
            update_total_xp(xp_gained)
            smithingBar.style.width = smithingData.smithingXp + '%';
            smithingBar.innerHTML = smithingData.smithingXp + '%';
            update("smithingXp", `Smithing Experience: ${smithingData.smithingXp}`, + smithingBar);
        }, get_game_tick());
    }
}

