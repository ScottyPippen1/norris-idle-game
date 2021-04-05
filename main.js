
// TODO: split this up into separate files, add skills and include some example categories, start character loading/saving
//game variables
var wcLoop;
var wcXp = 0;
var fishLoop;
var fishXp = 0;
var totalXp = 0;
var trees = ["tree, oak, teak, yew, magic"];
var fish = ["shrimp, trout, swordfish, monkfish"];


// axes value will be index + 1. (bronze = 0 + 1, iron = 1 + 1, etc.)
var axes = ["bronze","iron", "steel", "black", "mithril", "adamant", "rune"];

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

// need to return an interval
// 
function get_game_tick(){
    return 3000;
}

function update_total_xp(xp_gained){
    totalXp = totalXp + xp_gained;
    update("totalXp", `Total Experience: ${totalXp} `);
}

function get_woodcutting_xp(tree) {
    // determine a weight for tree_weight
    var tree_xp = null;
    switch(tree) {
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
 
// test function to try and get an rng implementation running for skilling
// function get_woodcutting_rate_rng(skill_level, tree, axe) { 

//     var tree_weight = null;
    
//     // determine a weight for tree_weight
//     switch(tree) {
//         case 'tree':
//             tree_weight = 1.283016;
//             break;
//         case 'oak':
//             tree_weight = 1.0;
//             break;
//         case 'teak':
//             tree_weight = 0.8;
//         case 'yew':
//             tree_weight = 0.6;
//             break;
//         case 'magic':
//             tree_weight = .2;
//             break;
//         default:
//             console.log('invalid tree type - get_woodcutting_rate_rng()');
//             break;
//     }
    
//     console.log('weight for tree we are using: ' + tree_weight);

//     // sanity check for tree_weight
//     if (tree_weight == null)
//     {
//         return;
//     }

//     // max weight level = 1.603773  | 80 % = 1.283016
//     var success_percentage = ( tree_weight*(axe+(skill_level)))/ 255;
//     var scalar = Math.floor(Math.random() * 101);

//     if (scalar < (success_percentage*100))
//     {
//         console.log('skill passed');
//         return 1; // skill succeeded
//     }
//     else
//     {
//         console.log('skill missed');
//         return 0; // skill missed
//     }

// }

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

function get_fishing_xp(fish_type) {
    // determine a weight for tree_weight
    var fish_xp = null;
    switch(fish_type) {
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
            tree_xp = 0;
            break;
    }
    return fish_xp;
}
function catchFish() {
    const fishBar = document.getElementById('fishBar');
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
            update("fishXp", `${fishXp} Fishing Experience`);
        }, get_game_tick());
    }
}

//progress bar
/*   const myBar = document.getElementById('myBar');
   var width = 0;
   var timeInt = setInterval(frame, 3000);
   //progress bar function
   function frame() {
       if (width >= 100) {
           clearInterval(timeInt);
       } else {
           width++;
           myBar.style.width = width + '%';
           myBar.innerHTML = width + '%';
       }
   }
*/

//cutWood();

