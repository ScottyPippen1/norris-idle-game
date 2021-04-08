
var wcData = {
    progBarLoop: null,
    wcLoop: null,
    wcXp: 0,
    trees: ["tree, oak, teak, yew, magic"],
    i: 0
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
    if (wcData.wcLoop) {
        clearInterval(wcData.wcLoop);
        wcData.wcLoop = null;
    } else {

        wcData.wcLoop = setInterval(() => {
            // let elem = document.getElementById("wcBar");
            // elem.innerHTML = "0%";
            // elem.style.width = get_game_tick();

            // for (i = 0; i < 3000; i++) {
            //     let progress = i / get_game_tick() * 100;
            //     elem.innerHTML = progress + "%";
            //     elem.style.width = progress + "%";
            // }
            //var attempt = get_woodcutting_rate(40, 'tree', 20); // level , type of tree, axe level
            let xp_gained = get_woodcutting_xp('tree');
            wcData.wcXp = wcData.wcXp + xp_gained;
            // elem.innerHTML = wcData.wcXp + "%";
            // elem.innerHTML = wcData.wcXp + "%";
            // visual updates
            update_total_xp(xp_gained);
            update("wcXp", `Woodcutting Experience: ${wcData.wcXp}`);
        }, get_game_tick());

    }
}


