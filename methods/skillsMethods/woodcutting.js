
var wcData = {
    progBarLoop: null,
    wcLoop: null,
    wcIntervalSpeed: 0,
    wcXp: 0,
    trees: ["tree, oak, teak, yew, magic"],
    i: 0
}

// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var axes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];

//need to return an interval
function get_game_tick() {
    return 3000;
}

function move_bar() {
    if (wcData.progBarLoop) {
        clearInterval(wcData.progBarLoop);
        wcData.progBarLoop = null;
    } else {
        wcData.progBarLoop = setInterval(() => {
            if (wcData.i == 0) {
                wcData.i = 1;
                let elem = document.getElementById("wcBar");
                let width = 1;
                wcData.progBarLoop = setInterval(() => {
                    if (width >= 100) {
                        clearInterval(wcData.progBarLoop);
                        wcData.i = 0;
                    } else {
                        width++;
                        elem.innerHTML = width + "%";
                        elem.style.width = width + "%";
                    }
                }, 30);
            }
        }, 30);
    }
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
    playerData.activeSkill = skillsData.skills[0].name;
    playerData.actionIntervalSpeed = skillsData.skills[0].baseIntervalSpeed;
    active_skill();
    // if (wcData.wcLoop) {
    // clearInterval(wcData.wcLoop);
    // wcData.wcLoop = null;
    // } else {

    // wcData.wcLoop = setInterval(() => {
    let xp_gained = get_woodcutting_xp('tree');
    wcData.wcXp = wcData.wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
    // }, get_interval_speed());

    // }
}



