//load saved game
var loadGame = JSON.parse(localStorage.getItem('savedGameData'));
if (loadGame != null) {
    gameData = loadGame; //saves to local storage
    console.log(loadGame);
    // localStorage.removeItem('savedGameData'); //clears local storage
};

//save game (game data needs to be stringified)
var saveGameLoop = window.setInterval(() => {
    //save game
    localStorage.setItem('savedGameData', JSON.stringify(gameData));
}, 1000);

// if (typeof loadGame !== "undefined") totalXp = loadGame.totalXp;
// if (typeof loadGame !== "undefined") skills = loadGame.skills;
// if (typeof loadGame !== "undefined") wcXp = loadGame.wcXp;
// if (typeof loadGame !== "undefined") wcLvl = loadGame.wcLvl;
// if (typeof loadGame !== "undefined") selectedTree = loadGame.selectedTree;

// if (saveGame !== null) {
//     // gameData = saveGame //saves to local storage
//     localStorage.removeItem("idleSaveGame") //clears local storage
// }

// if (typeof saveGame.wcXp !== "undefined") gameData.wcXp = saveGame.wcXp;
// if (typeof saveGame.totalXp !== "undefined") gameData.totalXp = saveGame.totalXp;

//main game loop
// let mainGameLoop = window.setInterval(() => {
//     diff = Date.now() - gameData.lastTick;
//     gameData.lastTick = Date.now()
// }, 1000)
