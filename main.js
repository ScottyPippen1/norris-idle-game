// player data object
let playerData = {
    activeSkill: [],
    actionIntervalSpeed: 0
}

//global variables
let task;
let selectedTree = null;
let selectedVein = null;
let selectedFishSpot = null;

//load saved game
var saveGame = JSON.parse(localStorage.getItem("idleGameSave"))
if (saveGame !== null) {
    // gameData = saveGame //saves to local storage
    localStorage.removeItem("idleSaveGame") //clears local storage
}

//save game (game data needs to be stringified)
var saveGameLoop = window.setInterval(() => {
    localStorage.setItem("idleGameSave", JSON.stringify(gameData))
}, 5000)



// if (typeof saveGame.wcXp !== "undefined") gameData.wcXp = saveGame.wcXp;
// if (typeof saveGame.totalXp !== "undefined") gameData.totalXp = saveGame.totalXp;

//main game loop
// let mainGameLoop = window.setInterval(() => {
//     diff = Date.now() - gameData.lastTick;
//     gameData.lastTick = Date.now()
// }, 1000)
