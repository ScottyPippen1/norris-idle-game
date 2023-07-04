window.onload = function () {
  // loadGame();
  updateLoadedGameUI();
  // localStorage.clear();
};

// Load game data from local storage or initialize if it doesn't exist
let gameData = JSON.parse(localStorage.getItem("gameData")) || {
  player: {
    wcXp: 0,
    wcLvl: 1,
    selectedTree: "Regular Tree",
    selectedTreeId: 0,
    inventory: {},
  },
};

// Save game data to local storage
function saveGameData() {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

// Clear the game data and local storage
function clearGameData() {
  gameData = {
    player: {
      wcXp: 0,
      wcLvl: 1,
      selectedTree: "Regular Tree",
      selectedTreeId: 0,
      inventory: {},
    },
  };
  localStorage.removeItem("gameData");
  displayInventory();
  updateLoadedGameUI();
  location.reload();
}

// function loadGame() {
//   //load saved game
//   let savedGame = JSON.parse(localStorage.getItem("gameSave"));
//   if (typeof savedGame.lastTick !== "undefined") lastTick = savedGame.lastTick;
//   if (typeof savedGame.totalXp !== "undefined") totalXp = savedGame.totalXp;
//   if (typeof savedGame.wcXp !== "undefined") wcXp = savedGame.wcXp;
//   if (typeof savedGame.wcLvl !== "undefined") wcLvl = savedGame.wcLvl;
//   if (typeof savedGame.selectedTree !== "undefined")
//     selectedTree = savedGame.selectedTree;
//   if (typeof savedGame.selectedTreeId !== "undefined")
//     selectedTreeId = savedGame.selectedTreeId;

//   console.log(savedGame);
// }

// function saveGame() {
//   let gameSave = {
//     lastTick: lastTick,
//     totalXp: totalXp,
//     wcXp: wcXp,
//     wcLvl: wcLvl,
//     selectedTree: selectedTree,
//     selectedTreeId: selectedTreeId,
//   };
//   localStorage.setItem("gameSave", JSON.stringify(gameSave));
// }

// function resetGame() {
//   localStorage.clear();
//   let newGame = {
//     totalXp: 0,
//     wcXp: 0,
//     wcLvl: 1,
//     selectedTree: "Regular Tree",
//     selectedTreeId: 0,
//   };
//   localStorage.setItem("gameSave", JSON.stringify(newGame));
//   updateLoadedGameUI();
//   location.reload();
// }
