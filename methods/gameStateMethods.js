window.onload = function () {
  loadGame();
  inv.loadFromLocalStorage();
  updateLoadedGameUI();
  // localStorage.clear();
};

function loadGame() {
  //load saved game
  let savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.lastTick !== "undefined") lastTick = savedGame.lastTick;
  if (typeof savedGame.totalXp !== "undefined") totalXp = savedGame.totalXp;
  if (typeof savedGame.wcXp !== "undefined") wcXp = savedGame.wcXp;
  if (typeof savedGame.wcLvl !== "undefined") wcLvl = savedGame.wcLvl;
  if (typeof savedGame.selectedTree !== "undefined")
    selectedTree = savedGame.selectedTree;
  if (typeof savedGame.selectedTreeId !== "undefined")
    selectedTreeId = savedGame.selectedTreeId;

  console.log(savedGame);
}

function saveGame() {
  let gameSave = {
    lastTick: lastTick,
    totalXp: totalXp,
    wcXp: wcXp,
    wcLvl: wcLvl,
    selectedTree: selectedTree,
    selectedTreeId: selectedTreeId,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame() {
  localStorage.clear();
  let newGame = {
    totalXp: 0,
    wcXp: 0,
    wcLvl: 1,
    selectedTree: "Regular Tree",
    selectedTreeId: 0,
  };
  localStorage.setItem("gameSave", JSON.stringify(newGame));
  updateLoadedGameUI();
  location.reload();
}
