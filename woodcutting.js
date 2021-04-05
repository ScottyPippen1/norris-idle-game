var wcLoop;
var wcXp = 0;
var totalXp = 0;
var trees = ["tree, oak, teak, yew, magic"];
// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
var axes = ["bronze", "iron", "steel", "black", "mithril", "adamant", "rune"];


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

function get_woodcutting_xp(tree) {
    // determine a weight for tree_weight
    var tree_xp = null;
    switch (tree) {
        case 'tree':
            tree_xp = 25;
            break;
        case 'oak':
            tree_xp = 37.5;
            break;
        case 'teak':
            tree_xp = 85;
            break;
        case 'yew':
            tree_xp = 175;
            break;
        case 'magic':
            tree_xp = 250;
            break;
        default:
            console.log('invalid tree type - get_woodcutting_xp()');
            tree_xp = 0;
            break;
    }

    return tree_xp
}

function cutWood() {
    const wcBar = document.getElementById('wcBar');
    if (wcLoop) {
        clearInterval(wcLoop);
        wcLoop = null;
    } else {
        wcLoop = setInterval(() => {
            //var attempt = get_woodcutting_rate(40, 'tree', 20); // level , type of tree, axe level
            var xp_gained = get_woodcutting_xp('tree');
            wcXp = wcXp + xp_gained;

            // visual updates
            update_total_xp(xp_gained)
            wcBar.style.width = wcXp + '%';
            wcBar.innerHTML = wcXp + '%';

            update("wcXp", `Woodcutting Experience: ${wcXp}`);
        }, get_game_tick());
    }
}

