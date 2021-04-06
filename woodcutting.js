
var gameData = {
    wcLoop: null,
    wcXp: 0,
    totalXp: 0,
    trees: ["tree, oak, teak, yew, magic"]
}
// var wcLoop: null,
// var wcXp = 0;
// var totalXp = 0;
// var trees = ["tree, oak, teak, yew, magic"];
// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var axes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];


function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

function update_total_xp(xp_gained) {
    gameData.totalXp = gameData.totalXp + xp_gained;
    update("totalXp", `Total Experience: ${gameData.totalXp} `);
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
    if (gameData.wcLoop) {
        clearInterval(gameData.wcLoop);
        gameData.wcLoop = null;
    } else {
        gameData.wcLoop = setInterval(() => {
            //var attempt = get_woodcutting_rate(40, 'tree', 20); // level , type of tree, axe level
            var xp_gained = get_woodcutting_xp('tree');
            gameData.wcXp = gameData.wcXp + xp_gained;
            // visual updates
            update_total_xp(xp_gained);
            wcBar.style.width = gameData.wcXp + '%';
            wcBar.innerHTML = gameData.wcXp + '%';
            update("wcXp", `Woodcutting Experience: ${gameData.wcXp}`, + wcBar);
        }, get_game_tick());
    }
}

// var saveGameLoop = window.setInterval(() => {
//     localStorage.setItem("idleGameSave", JSON.stringify(gameData))
// }, 5000)

