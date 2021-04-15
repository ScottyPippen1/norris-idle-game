
var wcData = {
    wcXp: 0,
    // trees: ["tree, oak, teak, yew, magic"],
}

// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var axes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];

// function get_woodcutting_xp(tree) {
//     // determine a weight for tree_weight
//     var tree_xp = null;
//     switch (tree) {
//         case 'tree':
//             tree_xp = 25;
//             break;
//         case 'oak':
//             tree_xp = 37.5;
//             break;
//         case 'teak':
//             tree_xp = 85;
//             break;
//         case 'yew':
//             tree_xp = 175;
//             break;
//         case 'magic':
//             tree_xp = 250;
//             break;
//         default:
//             console.log('invalid tree type - get_woodcutting_xp()');
//             tree_xp = 0;
//             break;
//     }

//     return tree_xp
// }

function cutWood() {
    playerData.activeSkill = skillsData.skills[0].name;
    playerData.actionIntervalSpeed = skillsData.skills[0].baseIntervalSpeed;
    active_skill();
    let xp_gained = woodcuttingTreeData.trees[0].xp;
    // let xp_gained = get_woodcutting_xp('tree');
    wcData.wcXp = wcData.wcXp + xp_gained;
    // visual updates
    update_total_xp(xp_gained);
    update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
    execute_woodcutting(1);
}



