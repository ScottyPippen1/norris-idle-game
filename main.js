
// TODO: split this up into separate files, add skills and include some example categories, start character loading/saving
//game variables


//load saved game
// var saveGame = JSON.parse(localStorage.getItem("idleGameSave"))
// if (saveGame !== null) {
//     gameData = saveGame
// }


function woodcuttingHandler() {
    cutWood();
}

function firemakingHandler() {
    lightLog();
}

function fishingHandler() {
    catchFish();
}

function cookingHandler() {
    cookFish();
}

function miningHandler() {
    mineVein();
}

function smithingHandler() {
    smeltBar();
}


//save game (game data needs to be stringified)
// var saveGameLoop = window.setInterval(() => {
//     localStorage.setItem("idleGameSave", JSON.stringify(gameData))
// }, 5000)


// if (typeof saveGame.wcXp !== "undefined") gameData.wcXp = saveGame.wcXp;
// if (typeof saveGame.totalXp !== "undefined") gameData.totalXp = saveGame.totalXp;


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


