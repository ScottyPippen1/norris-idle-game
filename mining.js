var miningLoop;
var miningXp = 0;
var totalXp = 0;
var ores = ["copper, tin, iron, coal, mithril, adamant, runite"];
// pickaxes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var pickaxes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];


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
    if (miningLoop) {
        clearInterval(miningLoop);
        miningLoop = null;
    } else {
        miningLoop = setInterval(() => {
            //var attempt = get_woodcutting_rate(40, 'tree', 20); // level , type of tree, axe level
            var xp_gained = get_mining_xp('iron');
            miningXp = miningXp + xp_gained;

            // visual updates
            update_total_xp(xp_gained)
            miningBar.style.width = miningXp + '%';
            miningBar.innerHTML = miningXp + '%';
            update("miningXp", `Mining Experience: ${miningXp}`, + miningBar);
        }, get_game_tick());
    }
}

