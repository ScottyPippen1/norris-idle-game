window.onload = function () {
  loadGame();
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
  if (typeof savedGame.regularLogCount !== "undefined")
    regularLogCount = savedGame.regularLogCount;

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
    regularLogCount: regularLogCount,
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
    regularLogCount: 0,
  };
  localStorage.setItem("gameSave", JSON.stringify(newGame));
  updateLoadedGameUI();
  location.reload();
}

function active_skill() {
  // updates active skill
  if (!activeSkill) {
    update("activeSkill", ``);
    return;
  }
  update("activeSkill", `Active skill: ${activeSkill}`);
  console.log(activeSkill);
}

//update loaded game html elements
function updateLoadedGameUI() {
  update("totalXp", `Total Experience: ${totalXp}`);
  update("wcLvl", `Woodcutting Level: ${wcLvl}`);
  update("wcXp", `Woodcutting Experience: ${wcXp}`);
  update("regularLogCount", `Regular Logs: ${regularLogCount}`);
  update("dropdownMenu2", selectedTree);
}

//updates html elements
function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

// updates total xp
function update_total_xp(xp_gained) {
  totalXp = totalXp + xp_gained;
  update("totalXp", `Total Experience: ${totalXp}`);
}

function woodcuttingHandler() {
  cutWood();
}
