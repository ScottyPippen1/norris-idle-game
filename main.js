//save game (game data needs to be stringified)
let saveGameLoop = window.setInterval(() => {
  saveGameData();
  //save game
  // localStorage.setItem('savedGameData', JSON.stringify(gameData));
}, 1000);

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
