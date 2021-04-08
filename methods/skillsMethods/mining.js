var miningData = {
    miningLoop: null,
    miningXp: 0,
    ores: ["copper, tin, iron, coal, mithril, adamant, runite"]
}

// pickaxes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var pickaxes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function get_mining_xp(vein) {
    // determine a weight for tree_weight
    var vein_xp = null;
    switch (vein) {
        case 'copper':
            vein_xp = 25;
            break;
        case 'tin':
            vein_xp = 25;
            break;
        case 'iron':
            vein_xp = 50;
            break;
        case 'coal':
            vein_xp = 65;
            break;
        case 'mithril':
            vein_xp = 80;
            break;
        case 'adamant':
            vein_xp = 95;
            break;
        case 'rune':
            vein_xp = 115;
            break;
        default:
            console.log('invalid vein type - get_mining_xp()');
            vein_xp = 0;
            break;
    }

    return vein_xp
}

function mineVein() {
    if (miningData.miningLoop) {
        clearInterval(miningData.miningLoop);
        miningData.miningLoop = null;
    } else {
        miningData.miningLoop = setInterval(() => {
            var xp_gained = get_mining_xp('iron');
            miningData.miningXp = miningData.miningXp + xp_gained;
            // visual updates
            update_total_xp(xp_gained)
            miningBar.style.width = miningData.miningXp + '%';
            miningBar.innerHTML = miningData.miningXp + '%';
            update("miningXp", `Mining Experience: ${miningData.miningXp}`, + miningBar);
        }, get_game_tick());
    }
}

