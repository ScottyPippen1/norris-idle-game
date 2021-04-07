
var wcData = {
    wcLoop: null,
    wcXp: 0,
    trees: ["tree, oak, teak, yew, magic"],
    // i: 0
}

// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
// var axes = ["bronze", "iron", "steel", "mithril", "adamant", "rune"];

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
//need to return an interval
function get_game_tick() {
    return 3000;
}

// function reset_progress() {
//     wcBar.style.width = '0%';
//     update("wcBar", wcBar);
// }

// function move_bar() {
//     if (wcData.i == 0) {
//         wcData.i = 1;
//         var elem = document.getElementById("wcBar");
//         var width = 0;
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (width >= 100) {
//                 width = 0;
//                 clearInterval(id);
//                 wcData.i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//             }
//         }
//     }
// }

// wcBar.style.width = "0%";

// setTimeout(() => {
//     wcBar.style.width = "100%";
// });

//}


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
    if (wcData.wcLoop) {
        clearInterval(wcData.wcLoop);
        wcData.wcLoop = null;
    } else {
        // reset_progress();
        // move_bar();
        wcData.wcLoop = setInterval(() => {

            //var attempt = get_woodcutting_rate(40, 'tree', 20); // level , type of tree, axe level
            var xp_gained = get_woodcutting_xp('tree');
            wcData.wcXp = wcData.wcXp + xp_gained;
            // visual updates
            update_total_xp(xp_gained);
            wcBar.style.width = wcData.wcXp + '%';
            wcBar.innerHTML = wcData.wcXp + '%';

            update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
        }, get_game_tick());
    }
}


